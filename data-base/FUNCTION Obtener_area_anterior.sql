CREATE OR REPLACE FUNCTION obtener_area_anterior(area_id_ INTEGER)
RETURNS INTEGER AS 
$$
DECLARE
	area_anterior integer;
BEGIN
	SELECT AT.area_id1 INTO area_anterior
	FROM Areas_tree AS AT
	WHERE  AT.area_id2 = area_id_;
	
	RETURN area_anterior;
END;
$$
LANGUAGE plpgsql;

SELECT obtener_area_anterior(2);