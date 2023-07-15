 SELECT p_rol.area_topic
            FROM (SELECT Ar.area_id,Ar.area_topic
            FROM Areas AS Ar, 
            Cards AS Ca,
            Roles AS Ro, 
            roles_access_points AS RAP, 
            User_types AS UT,
	        User_cards AS UC
            WHERE Ca.card_id = '1'
            AND UC.card_id = Ca.card_id
            AND UC.user_id = UT.user_id
            AND UT.rol_id = RAP.rol_id
            AND Ar.area_id = RAP.area_id) AS p_rol
            UNION 
            SELECT Ar.area_topic
            FROM Areas AS Ar, Cards AS Ca, Card_access_points AS CAP
            WHERE Ca.card_id = '1'
            AND Ar.area_id = CAP.area_id
			
			
			
 SELECT * 
 FROM (SELECT p_rol.area_id
            FROM (SELECT Ar.area_id,Ar.area_topic
            FROM Areas AS Ar, 
            Cards AS Ca,
            Roles AS Ro, 
            roles_access_points AS RAP, 
            User_types AS UT,
	        User_cards AS UC
            WHERE Ca.card_id = '1'
            AND UC.card_id = Ca.card_id
            AND UC.user_id = UT.user_id
            AND UT.rol_id = RAP.rol_id
            AND Ar.area_id = RAP.area_id) AS p_rol
            UNION 
            SELECT Ar.area_id
            FROM Areas AS Ar, Cards AS Ca, Card_access_points AS CAP
            WHERE Ca.card_id = '1'
            AND Ar.area_id = CAP.area_id) AS permisos_tarjeta,
			Areas_time AS Artime
WHERE Artime.area_id = permisos_tarjeta.area_id
AND EXTRACT(DOW FROM NOW()) = Artime.day_value
AND CURRENT_TIMESTAMP::time BETWEEN Artime.entry_time AND Artime.exit_time;
			
			