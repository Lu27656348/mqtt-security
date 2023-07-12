CREATE OR REPLACE FUNCTION obtener_area_posterior(area_id_ INTEGER)
RETURNS INTEGER AS 
$$
DECLARE
	area_posterior integer;
BEGIN
	SELECT AT.area_id2 INTO area_posterior
	FROM Areas_tree AS AT
	WHERE  AT.area_id1 = area_id_;
	
	RETURN area_posterior;
END;
$$
LANGUAGE plpgsql;

SELECT obtener_area_posterior(6);