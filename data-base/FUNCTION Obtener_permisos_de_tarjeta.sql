CREATE OR REPLACE FUNCTION obtener_topicos_card(card_id_ TEXT)
RETURNS TABLE (topicos TEXT)AS 
$$
DECLARE
	topic text := '';
	area_level integer;
	busqueda integer;
	card_access_points_records RECORD;
BEGIN
	DROP TABLE IF EXISTS temp_table;
	CREATE TEMP TABLE temp_table (
		topicos TEXT
	);
	
	SELECT Ca.* INTO card_access_points_records
	FROM Areas AS Ar, Cards AS Ca, card_access_points AS CAP
	WHERE Ca.card_id = card_id_
	AND Ca.card_id = CAP.card_id
	AND CAP.area_id = Ar.area_id;
	
	RAISE NOTICE 'columna1: %', card_access_points_records.card_id;
	/*
	RETURN QUERY SELECT * FROM temp_table;
	*/
END;
$$
LANGUAGE plpgsql;

INSERT INTO 

SELECT obtener_topicos_card('8000001');