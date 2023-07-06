DROP TABLE IF EXISTS Client_Topic;
DROP TABLE IF EXISTS Topics;
DROP TABLE IF EXISTS Acceso;
DROP TABLE IF EXISTS Lector;


DROP TABLE IF EXISTS Permiso;

DROP TABLE IF EXISTS Area;
DROP TABLE IF EXISTS Persona;
DROP TABLE IF EXISTS Rol;
DROP TABLE IF EXISTS Client;

CREATE TABLE Rol (
  id_rol SERIAL,
  nombre VARCHAR(255),
  PRIMARY KEY (id_rol)
);

CREATE TABLE Persona (
  user_id SERIAL,
  nombre VARCHAR(255),
  apellido VARCHAR(255),
  tipo_persona VARCHAR(255),
  estado VARCHAR(255),
  id_tarjeta INT,
  foto BYTEA,
  tipo_tarjeta VARCHAR(255),
  rol_id INT,
  PRIMARY KEY (user_id),
  FOREIGN KEY (rol_id) REFERENCES Rol (id_rol)
);

CREATE TABLE Area (
	id_area SERIAL,
	localizacion VARCHAR(255),
	PRIMARY KEY (id_area)
);

CREATE TABLE Lector (
  id_lector SERIAL,
  topic_res VARCHAR(255),
  topic_con VARCHAR(255),
  tipo_lector VARCHAR(255),
  modo VARCHAR(255),
  area_id INT,
  PRIMARY KEY (id_lector),
  FOREIGN KEY (area_id) REFERENCES Area (id_area)
);

CREATE TABLE Acceso (
	fechaAcceso TIMESTAMP,
	rol_id INT,
    lector_id INT,
	PRIMARY KEY (fechaAcceso ,rol_id, lector_id),
	FOREIGN KEY (rol_id) REFERENCES Rol (id_rol),
	FOREIGN KEY (lector_id) REFERENCES Lector (id_lector)
);

CREATE TABLE Permiso (
	user_id INT,
	area_id INT,
	estado VARCHAR(255),
	PRIMARY KEY (user_id, area_id),
	FOREIGN KEY (user_id) REFERENCES Persona (user_id),
	FOREIGN KEY (area_id) REFERENCES Area (id_area)
);



--Autenticado

CREATE TABLE Client (
	client_id SERIAL,
	name VARCHAR(255),
	password VARCHAR(255),
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

INSERT INTO Client(name, password) VALUES('Nahum','queclave');