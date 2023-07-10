-- FUNCTION
-- 1) Funcion que se encarga de verificar si area_Id1 y area_id2 son consecutivos y area_id1<area_id2
CREATE OR REPLACE FUNCTION check_areas_nivel() RETURNS TRIGGER AS $$
BEGIN
  IF (SELECT level FROM Areas WHERE area_id = NEW.area_id1) + 1 <> (SELECT level FROM Areas WHERE area_id = NEW.area_id2)
  THEN
    RAISE EXCEPTION 'No se puede crear la relación entre áreas con niveles no consecutivos';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;


-- TRIGGER
-- 1) Trigger que se encarga que llama a la funcion check_areas_nivel() antes de hacer INSERT en la tabla Areas_tree (Para mas informacion sube a seccion de Funciones)
CREATE TRIGGER check_areas_nivel_trigger
BEFORE INSERT ON Areas_tree
FOR EACH ROW
EXECUTE FUNCTION check_areas_nivel();