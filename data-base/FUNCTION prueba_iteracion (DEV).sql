DROP FUNCTION IF EXISTS prueba_iteracion;

CREATE OR REPLACE FUNCTION prueba_iteracion(area_level_test INTEGER)
RETURNS TABLE (numero INTEGER) AS 
$$
DECLARE
	area_level_var integer;
	area_level_aux integer;
	registro record;
BEGIN

	DROP TABLE IF EXISTS temp_table_test;
	
	CREATE TEMP TABLE temp_table_test (
		numero INTEGER
	);

	area_level_aux := area_level_var;
	area_level_var := area_level_test;
	WHILE (SELECT COUNT(*) FROM obtener_areas_por_nivel(area_level_var)) > 0 LOOP
	FOR registro IN SELECT obtener_areas_por_nivel(area_level_var) LOOP
		IF registro IS NULL THEN
			RETURN QUERY SELECT 'No hay registros';
		END IF;
		IF EXISTS (SELECT 1 FROM Areas_tree WHERE Areas_tree.area_id1 = registro.obtener_areas_por_nivel OR Areas_tree.area_id2 = registro.obtener_areas_por_nivel) THEN
			INSERT INTO temp_table_test (numero) VALUES (registro.obtener_areas_por_nivel);
		END IF;

	END LOOP;
	area_level_var := area_level_var + 1;
	END LOOP;
	
	RETURN QUERY SELECT * FROM temp_table_test;

END;
$$
LANGUAGE plpgsql;


SELECT COUNT(*) FROM prueba_iteracion(0);
SELECT Areas_tree_ids.numero, Ar.level FROM prueba_iteracion(0) AS Areas_tree_ids, Areas AS Ar WHERE Ar.area_id = Areas_tree_ids.numero;

SELECT COUNT(*) FROM Areas_tree;
SELECT COUNT(*) FROM Areas;