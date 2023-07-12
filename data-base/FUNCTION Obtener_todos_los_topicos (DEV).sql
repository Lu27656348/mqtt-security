DROP FUNCTION IF EXISTS obtener_todos_topicos;

CREATE OR REPLACE FUNCTION obtener_todos_topicos()
RETURNS TABLE (topico TEXT) AS 
$$
DECLARE
	topic text := '';
	area_level_var integer;
	area_level_aux integer;
	area_id_var integer;
	registro record;
BEGIN

	DROP TABLE IF EXISTS temp_table;
	
	CREATE TEMP TABLE temp_table (
		topicos TEXT
	);
	area_level_var := 0; 
	
	WHILE (SELECT COUNT(*) FROM obtener_areas_por_nivel(area_level_var)) > 0 LOOP
	FOR registro IN SELECT obtener_areas_por_nivel(area_level_var) LOOP
		IF registro IS NULL THEN
			RETURN QUERY SELECT 'No hay registros';
		END IF;
		IF EXISTS (SELECT 1 FROM Areas_tree WHERE Areas_tree.area_id1 = registro.obtener_areas_por_nivel OR Areas_tree.area_id2 = registro.obtener_areas_por_nivel) THEN
			topic := obtener_topicos_area(registro.obtener_areas_por_nivel);
			INSERT INTO temp_table (topicos) VALUES (topic);
		END IF;

	END LOOP;
	area_level_var := area_level_var + 1;
	END LOOP;		
		
	RETURN QUERY SELECT * FROM temp_table;

END;
$$
LANGUAGE plpgsql;

SELECT obtener_todos_topicos();