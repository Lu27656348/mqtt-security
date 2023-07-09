-- DROPS DE PRUEBA
DROP TABLE IF EXISTS Roles;
DROP TABLE IF EXISTS Cards;
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Areas;
DROP TABLE IF EXISTS Devices;
DROP TABLE IF EXISTS Permisos;
DROP TABLE IF EXISTS User_types;
DROP TABLE IF EXISTS Card_access_points;
DROP TABLE IF EXISTS Roles_access_points;
DROP TABLE IF EXISTS Card_access;
DROP TABLE IF EXISTS Areas_tree;
DROP TABLE IF EXISTS Client;
DROP TABLE IF EXISTS Topics;
DROP TABLE IF EXISTS Client_Topic;

-- **************************************************************************************************
-- FUNCTIONS

-- 1) Funcion que se encarga de verificar si area_Id1 y area_id2 son consecutivos y area_id1<area_id2
CREATE OR REPLACE FUNCTION check_areas_nivel() RETURNS TRIGGER AS $$
BEGIN
  IF (SELECT nivel FROM Areas WHERE area_id = NEW.area_id1) + 1 <> (SELECT nivel FROM Areas WHERE area_id = NEW.area_id2)
  THEN
    RAISE EXCEPTION 'No se puede crear la relación entre áreas con niveles no consecutivos';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

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

-- **************************************************************************************************
-- TRIGGERS

-- 1) Trigger que se encarga que llama a la funcion check_areas_nivel() antes de hacer INSERT en la tabla Areas_tree (Para mas informacion sube a seccion de Funciones)
CREATE TRIGGER check_areas_nivel_trigger
BEFORE INSERT ON Areas_tree
FOR EACH ROW
EXECUTE FUNCTION check_areas_nivel();

-- 2) Trigger que se encarga que llama a la funcion lowercase_area_topic() antes de hacer INSERT en la tabla Areas (Para mas informacion sube a seccion de Funciones)
CREATE TRIGGER lowercase_area_topic_trigger
BEFORE INSERT ON Areas
FOR EACH ROW
EXECUTE FUNCTION lowercase_area_topic();

-- 3) Trigger que se encarga que llama a la funcion lowercase_area_topic() antes de hacer INSERT en la tabla Roles (Para mas informacion sube a seccion de Funciones)
CREATE TRIGGER lowercase_type_trigger
BEFORE INSERT ON Roles
FOR EACH ROW
EXECUTE FUNCTION lowercase_type();

-- **************************************************************************************************
-- CREACIONES DE TABLAS

CREATE TABLE Roles (
  rol_id SERIAL,
  type VARCHAR(255) NOT NULL,
  PRIMARY KEY (rol_id)
);

CREATE TABLE Cards (
  card_id VARCHAR(9),
  status VARCHAR(12) NOT NULL,
  PRIMARY KEY (card_id)
);

CREATE TABLE Users (
  user_id SERIAL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  photo BYTEA,
  type VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE Areas (
	area_id SERIAL,
	area_topic VARCHAR(255) NOT NULL,
	level INT NOT NULL,
	description VARCHAR(255),
	PRIMARY KEY (area_id)
);

CREATE TABLE Devices (
  device_id SERIAL,
  topic_res VARCHAR(255) NOT NULL,
  topic_req VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  status VARCHAR(255) NOT NULL,
  token VARCHAR(255),
  area_id INT,
  PRIMARY KEY (device_id),
  FOREIGN KEY (area_id) REFERENCES Areas (area_id)
);

CREATE TABLE Permiso (
	user_id INT,
	area_id INT,
	estado VARCHAR(255),
	PRIMARY KEY (user_id, area_id),
	FOREIGN KEY (user_id) REFERENCES Users (user_id),
	FOREIGN KEY (area_id) REFERENCES Areas (area_id)
);

CREATE TABLE User_types (
	rol_id INT,
    user_id INT,
	PRIMARY KEY (rol_id, user_id),
	FOREIGN KEY (rol_id) REFERENCES Roles (rol_id),
	FOREIGN KEY (user_id) REFERENCES Users (user_id)
);

CREATE TABLE User_cards (
	rol_id INT,
    card_id VARCHAR(9),
	PRIMARY KEY (rol_id, card_id),
	FOREIGN KEY (rol_id) REFERENCES Roles (rol_id),
	FOREIGN KEY (card_id) REFERENCES Cards (card_id)
);

CREATE TABLE Card_access_points (
    card_id VARCHAR(9),
	area_id INT,
	PRIMARY KEY (card_id, area_id),
	FOREIGN KEY (area_id) REFERENCES Areas (area_id),
	FOREIGN KEY (card_id) REFERENCES Cards (card_id)
);

CREATE TABLE Roles_access_points (
    card_id VARCHAR(9),
	area_id INT,
	PRIMARY KEY (card_id, area_id),
	FOREIGN KEY (area_id) REFERENCES Areas (area_id),
	FOREIGN KEY (card_id) REFERENCES Cards (card_id)
);

CREATE TABLE Card_access (
    card_id VARCHAR(9),
	area_id INT,
	access_date TIMESTAMP NOT NULL,
	access_data VARCHAR(255) NOT NULL,
	PRIMARY KEY (card_id, area_id),
	FOREIGN KEY (area_id) REFERENCES Areas (area_id),
	FOREIGN KEY (card_id) REFERENCES Cards (card_id)
);

CREATE TABLE Areas_tree (
	area_id1 INT,
	area_id2 INT,
	PRIMARY KEY (area_id1, area_id2),
	FOREIGN KEY (area_id1) REFERENCES Areas (area_id),
	FOREIGN KEY (area_id2) REFERENCES Areas (area_id)
);



--Autenticado

CREATE TABLE Client (
	client_id SERIAL,
	name VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL,
	PRIMARY KEY (client_id)
);

CREATE TABLE Topics (
	topic_id SERIAL,
	nombre VARCHAR(255),
	description VARCHAR(255),
	fecha_creacion DATE,
	estado VARCHAR(255),
	PRIMARY KEY (topic_id)
);

CREATE TABLE Client_Topic (
	fecha TIMESTAMP,
	client_id INT,
	topic_id INT,
	PRIMARY KEY (fecha, client_id, topic_id),
	FOREIGN KEY (client_id) REFERENCES Client (client_id),
	FOREIGN KEY (topic_id) REFERENCES Topics (topic_id)
);

-- **************************************************************************************************
--INSERT EN CLIENT
INSERT INTO Client(name, password) VALUES('Nahum','queclave');

-- **************************************************************************************************
-- INSERT EN AREAS
INSERT INTO Areas (area_topic, nivel) VALUES ('UCAB', 0);
INSERT INTO Areas (area_topic, nivel, description) VALUES ('Biblioteca', 1, 'Área de las Biblioteca');
INSERT INTO Areas (area_topic, nivel, description) VALUES ('piso1',2,'Area de piso 1 de la biblioteca');
INSERT INTO Areas (area_topic, nivel, description) VALUES ('Cálculo', 2, 'Rama de las matemáticas');
INSERT INTO Areas (area_topic, nivel, description) VALUES ('Geometría', 2, 'Rama de las matemáticas');
INSERT INTO Areas (area_topic, nivel, description) VALUES ('sala1', 3, 'Sala 1 de piso de 1 de Biblioteca');
INSERT INTO Areas (area_topic, nivel, description) VALUES ('Álgebra lineal', 3, 'Rama del álgebra');
INSERT INTO Areas (area_topic, nivel, description) VALUES ('Álgebra abstracta', 3, 'Rama del álgebra');
INSERT INTO Areas (area_topic, nivel, description) VALUES ('Geometría diferencial', 3, 'Rama de la geometría');
INSERT INTO Areas (area_topic, nivel, description) VALUES ('Geometría algebraica', 3, 'Rama de la geometría');
INSERT INTO Areas (area_topic, nivel, description) VALUES ('Topología', 3, 'Rama de la geometría');

select * from Areas;

-- **************************************************************************************************
-- INSERTS EN AREAS_TREE
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (1,2);

--Pruebas para el Trigger
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (1,3); -- NO es consecutivo no funciona
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (4,3); -- area_id1 debe ser menor que area_id2 (Para seguir un orden)
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (3,3); -- No es consecutivo,son iguales

select * from Areas_tree;

-- **************************************************************************************************
-- INSERTS EN ROLES
INSERT INTO Roles (type) VALUES ('EstuDIantE');
INSERT INTO Roles (type) VALUES ('PROFESOR');
INSERT INTO Roles (type) VALUES ('Personal');

SELECT * FROM Roles