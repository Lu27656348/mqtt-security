/*Esta función recibe como parametro el ID de un área y busca dentro del arbol de áreas el nivel anterior
	en el caso de que no exista un nivel anterior, entonces la función devuelve -1
	en el caso contrario devuelve el nivel del nodo anterior*/
CREATE OR REPLACE FUNCTION verificar_area_anterior(area_id_ INTEGER)
RETURNS INTEGER AS 
$$
DECLARE
	area_level integer;
BEGIN
	SELECT A.level INTO area_level 
	FROM Areas AS A
	WHERE area_id = area_id_;
	
	IF area_level IS NULL THEN
		RAISE EXCEPTION 'No existe un area con el id %',area_id_;
	ELSE
		IF area_level > 0 THEN
		 	SELECT A.level INTO area_level 
		 	FROM Areas_tree AS AT, Areas AS A 
		 	WHERE AT.area_id2 = area_id_ 
		 	AND A.area_id = AT.area_id1; 
		ELSE
			IF area_level = 1 THEN
				area_level := 0;
			ELSE
				area_level := -1;
			END IF;
		END IF;
	END IF;
	
	RETURN area_level;
END;
$$
LANGUAGE plpgsql;

SELECT verificar_area_anterior(-1);

SELECT A.level
FROM Areas_tree AS AT, Areas AS A 
WHERE AT.area_id2 = 2
AND A.area_id = AT.area_id1;

SELECT a.level
FROM Areas As a
WHERE area_id = 24;
	
SELECT *
FROM Areas_tree;