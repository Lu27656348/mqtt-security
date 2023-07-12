-- FUNCTION
-- 3) Funcion que se encarga de convertir letras de mayusculas a minusculas. Para el atributo "type" de la tabla Roles
CREATE OR REPLACE FUNCTION lowercase_type() RETURNS TRIGGER AS $$
DECLARE
  new_type TEXT;
  i INT := 1;
BEGIN
  new_type := '';
  WHILE i <= length(NEW.type) LOOP
    IF substring(NEW.type, i, 1) SIMILAR TO '[a-zA-Z]'
    THEN
      new_type := new_type || lower(substring(NEW.type, i, 1));
    ELSE
      new_type := new_type || substring(NEW.type, i, 1);
    END IF;
    i := i + 1;
  END LOOP;
  NEW.type := new_type;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- TRIGGERS
-- 3) Trigger que se encarga que llama a la funcion lowercase_area_topic() antes de hacer INSERT en la tabla Roles (Para mas informacion sube a seccion de Funciones)
CREATE TRIGGER lowercase_type_trigger
BEFORE INSERT ON Roles
FOR EACH ROW
EXECUTE FUNCTION lowercase_type();