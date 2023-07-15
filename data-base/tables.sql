


DROP TABLE IF EXISTS roles_access_points;
DROP TABLE IF EXISTS card_access_points;
DROP TABLE IF EXISTS areas_time;
DROP TABLE IF EXISTS user_cards;
DROP TABLE IF EXISTS user_types;

DROP TABLE IF EXISTS card_access;
DROP TABLE IF EXISTS areas_tree;

DROP TABLE IF EXISTS devices;
DROP TABLE IF EXISTS areas;
DROP TABLE IF EXISTS cards;
DROP TABLE IF EXISTS client;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS client;
-- **************************************************************************************************
-- ELIMINACIONES DE TABLAS
DROP TABLE IF EXISTS Areas_time;
DROP TABLE IF EXISTS Areas_tree;
DROP TABLE IF EXISTS Card_access;
DROP TABLE IF EXISTS Roles_access_points;
DROP TABLE IF EXISTS Card_access_points;
DROP TABLE IF EXISTS User_cards;
DROP TABLE IF EXISTS User_types;
DROP TABLE IF EXISTS Devices;
DROP TABLE IF EXISTS Areas;
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Cards;
DROP TABLE IF EXISTS Roles;

-- **************************************************************************************************
-- CREACIONES DE TABLAS


CREATE TABLE Roles (
  rol_id SERIAL,
  type VARCHAR(255) NOT NULL,
  PRIMARY KEY (rol_id),
  UNIQUE (type)
);

CREATE TABLE Cards (
  card_id VARCHAR(9),
  status VARCHAR(12) NOT NULL,
  PRIMARY KEY (card_id)
);

CREATE TABLE Users (
  user_id SERIAL,
  name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  photo BYTEA,
  departament VARCHAR(50) NOT NULL,
  status VARCHAR(12) NOT NULL,
  PRIMARY KEY (user_id)
);
CREATE TABLE Client (
	client_id SERIAL,
	name TEXT NOT NULL,
	password TEXT NOT NULL,
	PRIMARY KEY (client_id)
);
CREATE TABLE Areas (
	area_id SERIAL,
	area_topic VARCHAR(255) NOT NULL,
	level INT NOT NULL,
	description VARCHAR(255),
	PRIMARY KEY (area_id)
);

CREATE TABLE Devices (
  device_id INTEGER,
  topic_res TEXT NOT NULL,
  topic_req TEXT NOT NULL,
  type TEXT NOT NULL,
  status TEXT DEFAULT 'OFF' NOT NULL,
  area_id INT,
  PRIMARY KEY (device_id),
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
	user_id INT,
    card_id VARCHAR(9),
	PRIMARY KEY (user_id, card_id),
	FOREIGN KEY (user_id) REFERENCES Users (user_id),
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
    rol_id INT,
	area_id INT,
	PRIMARY KEY (rol_id, area_id),
	FOREIGN KEY (area_id) REFERENCES Areas (area_id),
	FOREIGN KEY (rol_id) REFERENCES Roles (rol_id)
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

CREATE TABLE Areas_time (
	area_id INT,
	day_value INT,
	entry_time TIME,
	exit_time TIME,
	PRIMARY KEY (area_id, day_value, entry_time, exit_time),
	FOREIGN KEY (area_id) REFERENCES Areas (area_id)	
);

INSERT INTO Client(name, password) VALUES ('Luis','admin');
INSERT INTO Client(name, password) VALUES ('Oliver','admin');

INSERT INTO Areas(area_topic, level, description) VALUES ('Ucab',0,'Campus universitario');
INSERT INTO Areas(area_topic, level, description) VALUES ('Biblioteca',1,'Biblioteca de UCAB Guayana');

INSERT INTO Areas_time(area_id,day_value,entry_time,exit_time) VALUES (1,0, '07:00:00', '22:00:00');
INSERT INTO Areas_time(area_id,day_value,entry_time,exit_time) VALUES (1,1, '07:00:00', '22:00:00');
INSERT INTO Areas_time(area_id,day_value,entry_time,exit_time) VALUES (1,2, '07:00:00', '22:00:00');
INSERT INTO Areas_time(area_id,day_value,entry_time,exit_time) VALUES (1,3, '07:00:00', '22:00:00');
INSERT INTO Areas_time(area_id,day_value,entry_time,exit_time) VALUES (1,4, '07:00:00', '22:00:00');
INSERT INTO Areas_time(area_id,day_value,entry_time,exit_time) VALUES (1,5, '07:00:00', '22:00:00');
INSERT INTO Areas_time(area_id,day_value,entry_time,exit_time) VALUES (1,6, '07:00:00', '22:00:00');

INSERT INTO Areas_tree(area_id1, area_id2) VALUES (1,2);

INSERT INTO Roles(rol_id, type) VALUES (1,'Estudiante');

INSERT INTO Users(user_id,name,last_name,departament,status) VALUES ('1', 'Cesar', 'Sotillo','Ingenieria Informatica','ACTIVE');

INSERT INTO User_types(rol_id,user_id) VALUES (1,'1');

INSERT INTO Devices(device_id,topic_res,topic_req, type, status, area_id) VALUES (1, obtener_topicos_area(2), CONCAT(obtener_topicos_area(2),'/escucha'),'1','ON',2 );

INSERT INTO Roles_access_points(rol_id,area_id) VALUES (1,1);

INSERT INTO Cards(card_id,status) VALUES ('8000001', 'ACTIVE');

INSERT INTO Card_access_points(card_id,area_id) VALUES ('8000001',2);
