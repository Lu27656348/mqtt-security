-- FUNCTION
-- 1) Funcion que se encarga de verificar si hora_entrada es menor que hora_salida
CREATE OR REPLACE FUNCTION check_time() RETURNS TRIGGER AS $$
BEGIN
  IF NEW.hora_entrada >= NEW.hora_salida
  THEN
    RAISE EXCEPTION 'La hora de entrada no debe ser mayor o igual a la hora de salida';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;


-- TRIGGER
-- 1) Trigger que se encarga que llama a la funcion check_time() antes de hacer INSERT en la tabla Areas_time (Para mas informacion sube a seccion de Funciones)
CREATE TRIGGER check_time_trigger
BEFORE INSERT ON Areas_time
FOR EACH ROW
EXECUTE FUNCTION check_time();