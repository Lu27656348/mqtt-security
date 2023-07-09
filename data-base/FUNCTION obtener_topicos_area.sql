CREATE OR REPLACE FUNCTION obtener_topicos_area(area_id_ INTEGER)
RETURNS TEXT AS 
$$
DECLARE
	topic text := '';
	area_level integer;
	busqueda integer;
BEGIN
	SELECT Ar.level INTO area_level 
	FROM Areas AS Ar
	WHERE area_id = area_id_;
	
	busqueda := area_id_;
	IF area_level = 0 THEN 
		RETURN obtener_topico(area_id_);
	END IF;
	IF area_level > 0 THEN
		 WHILE verificar_area_anterior(busqueda) <> -1 LOOP
		 	IF topic = '' THEN
        		topic := concatenar_topicos(obtener_topico(obtener_area_anterior(busqueda)),obtener_topico(busqueda));
			ELSE 
				topic := concatenar_topicos(obtener_topico(obtener_area_anterior(busqueda)),topic);
			END IF;
			busqueda := obtener_area_anterior(busqueda);
    	END LOOP;
	ELSE
	
	END IF;
	RETURN topic;
END;
$$
LANGUAGE plpgsql;

SELECT obtener_topicos_area(6);