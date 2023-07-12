-- FUNCTION
-- 2) Funcion que se encarga de convertir letras de mayusculas a minusculas. Para el atributo "area_topic" de la tabla Areas
CREATE OR REPLACE FUNCTION lowercase_area_topic() RETURNS TRIGGER AS $$
DECLARE
  new_area_topic TEXT;
  i INT := 1;
BEGIN
  new_area_topic := '';
  WHILE i <= length(NEW.area_topic) LOOP
    IF substring(NEW.area_topic, i, 1) SIMILAR TO '[a-zA-Z]'
    THEN
      new_area_topic := new_area_topic || lower(substring(NEW.area_topic, i, 1));
    ELSE
      new_area_topic := new_area_topic || substring(NEW.area_topic, i, 1);
    END IF;
    i := i + 1;
  END LOOP;
  NEW.area_topic := new_area_topic;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- TRIGGERS
-- 2) Trigger que se encarga que llama a la funcion lowercase_area_topic() antes de hacer INSERT en la tabla Areas (Para mas informacion sube a seccion de Funciones)
CREATE TRIGGER lowercase_area_topic_trigger
BEFORE INSERT ON Areas
FOR EACH ROW
EXECUTE FUNCTION lowercase_area_topic();