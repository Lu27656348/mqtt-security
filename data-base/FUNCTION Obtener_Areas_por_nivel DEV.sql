DROP FUNCTION IF EXISTS obtener_areas_por_nivel;

CREATE OR REPLACE FUNCTION obtener_areas_por_nivel(area_level_ INTEGER)
RETURNS TABLE (areas_id_list INTEGER) AS 
$$
DECLARE
	registro record;
BEGIN

	DROP TABLE IF EXISTS level_table;
	
	CREATE TEMP TABLE level_table (
		areas_id_list INTEGER
	);
	
	FOR registro IN SELECT * FROM Areas WHERE Areas.level = area_level_
	LOOP
		INSERT INTO level_table(areas_id_list) VALUES (registro.area_id);
	END LOOP;
	RETURN QUERY SELECT * FROM level_table;
	/*
	
	*/
	
END;
$$
LANGUAGE plpgsql;

SELECT count(*) FROM obtener_areas_por_nivel(0);
SELECT obtener_areas_por_nivel(0);

SELECT count(*) FROM obtener_areas_por_nivel(1);
SELECT obtener_areas_por_nivel(1);
