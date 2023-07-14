-- INSERT EN AREAS
--Raiz
INSERT INTO Areas (area_topic, level) VALUES ('UCAB', 0);

--Ucab
INSERT INTO Areas (area_topic, level, description) VALUES ('Biblioteca', 1, 'Área de las Biblioteca');
INSERT INTO Areas (area_topic, level, description) VALUES ('Modulo1', 1, 'Área de Modulo 1');
INSERT INTO Areas (area_topic, level, description) VALUES ('Modulo2', 1, 'Área de Modulo 2');
INSERT INTO Areas (area_topic, level, description) VALUES ('Modulo3', 1, 'Área de Modulo 3');

--Biblioteca
INSERT INTO Areas (area_topic, level, description) VALUES ('piso1',2,'Area de piso 1 de la biblioteca');
INSERT INTO Areas (area_topic, level, description) VALUES ('piso2',2,'Area de piso 2 de la biblioteca');
INSERT INTO Areas (area_topic, level, description) VALUES ('piso3',2,'Area de piso 3 de la biblioteca');--MOd

--Modulo 1
INSERT INTO Areas (area_topic, level, description) VALUES ('piso1', 2, 'Área de Modulo 1, piso 1');
INSERT INTO Areas (area_topic, level, description) VALUES ('piso2', 2, 'Área de Modulo 1, piso 2');
INSERT INTO Areas (area_topic, level, description) VALUES ('piso3', 2, 'Área de Modulo 1, piso 3');

-- MOdulo 2
INSERT INTO Areas (area_topic, level, description) VALUES ('piso1', 2, 'Área de Modulo 2, piso 1');
INSERT INTO Areas (area_topic, level, description) VALUES ('piso2', 2, 'Área de Modulo 2, piso 2');
INSERT INTO Areas (area_topic, level, description) VALUES ('piso3', 2, 'Área de Modulo 2, piso 3');

-- MOdulo AR
INSERT INTO Areas (area_topic, level, description) VALUES ('piso1', 2, 'Área de Modulo AR, piso 1');
INSERT INTO Areas (area_topic, level, description) VALUES ('piso2', 2, 'Área de Modulo AR, piso 2');
INSERT INTO Areas (area_topic, level, description) VALUES ('piso3', 2, 'Área de Modulo AR, piso 3');

-- biblioteca piso 3
INSERT INTO Areas (area_topic, level, description) VALUES ('sala1', 3, 'Sala 1 de piso de 1 de Biblioteca, Sala 1');
INSERT INTO Areas (area_topic, level, description) VALUES ('sala2', 3, 'Sala 1 de piso de 1 de Biblioteca, Sala 2');
INSERT INTO Areas (area_topic, level, description) VALUES ('sala3', 3, 'Sala 1 de piso de 1 de Biblioteca, Sala 3');

-- biblioteca piso 2
INSERT INTO Areas (area_topic, level, description) VALUES ('Rectorado', 3, 'Sala 1 de piso de 2 de Biblioteca, Rectorado');
INSERT INTO Areas (area_topic, level, description) VALUES ('Vicerectorado', 3, 'Sala 1 de piso de 2 de Biblioteca, Vicerectorado');
INSERT INTO Areas (area_topic, level, description) VALUES ('Finanzas', 3, 'Sala 1 de piso de 2 de Biblioteca, Finanzas');

-- biblioteca piso 3
INSERT INTO Areas (area_topic, level, description) VALUES ('sala1', 3, 'Sala 1 de piso de 3 de Biblioteca, Sala 1');
INSERT INTO Areas (area_topic, level, description) VALUES ('sala2', 3, 'Sala 1 de piso de 3 de Biblioteca, Sala 2');
INSERT INTO Areas (area_topic, level, description) VALUES ('sala3', 3, 'Sala 1 de piso de 3 de Biblioteca, Sala 3');

-- Modulo 1, Piso 1
INSERT INTO Areas (area_topic, level) VALUES ('A1-11', 3);
INSERT INTO Areas (area_topic, level) VALUES ('A1-12', 3);
INSERT INTO Areas (area_topic, level) VALUES ('A1-13', 3);

--Modulo 1, piso 2
INSERT INTO Areas (area_topic, level) VALUES ('A1-21', 3);
INSERT INTO Areas (area_topic, level) VALUES ('A1-22', 3);
INSERT INTO Areas (area_topic, level) VALUES ('A1-23', 3);

--Modulo 1, piso 3
INSERT INTO Areas (area_topic, level) VALUES ('A1-31', 3);
INSERT INTO Areas (area_topic, level) VALUES ('A1-32', 3);
INSERT INTO Areas (area_topic, level) VALUES ('A1-33', 3);

-- Modulo 2, Piso 1
INSERT INTO Areas (area_topic, level) VALUES ('A2-11', 3);
INSERT INTO Areas (area_topic, level) VALUES ('A2-12', 3);
INSERT INTO Areas (area_topic, level) VALUES ('A2-13', 3);

-- Modulo 2, Piso 2
INSERT INTO Areas (area_topic, level) VALUES ('A2-21', 3);
INSERT INTO Areas (area_topic, level) VALUES ('A2-22', 3);
INSERT INTO Areas (area_topic, level) VALUES ('A2-23', 3);

-- Modulo 2, Piso 3
INSERT INTO Areas (area_topic, level) VALUES ('A2-31', 3);
INSERT INTO Areas (area_topic, level) VALUES ('A2-32', 3);
INSERT INTO Areas (area_topic, level) VALUES ('A2-33', 3);

-- Modulo AR, Piso 1
INSERT INTO Areas (area_topic, level) VALUES ('AR-11', 3);
INSERT INTO Areas (area_topic, level) VALUES ('AR-12', 3);
INSERT INTO Areas (area_topic, level) VALUES ('AR-13', 3);

-- Modulo AR, Piso 2
INSERT INTO Areas (area_topic, level) VALUES ('AR-21', 3);
INSERT INTO Areas (area_topic, level) VALUES ('AR-22', 3);
INSERT INTO Areas (area_topic, level) VALUES ('AR-23', 3);

-- Modulo AR, Piso 3
INSERT INTO Areas (area_topic, level) VALUES ('AR-31', 3);
INSERT INTO Areas (area_topic, level) VALUES ('AR-32', 3);
INSERT INTO Areas (area_topic, level) VALUES ('AR-33', 3);

select * from Areas;

--DELETE FROM Areas;

-- **************************************************************************************************
-- INSERTS EN AREAS_TREE
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (1,2);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (1,3);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (1,4);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (1,5);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (2,6);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (2,7);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (2,8);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (3,9);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (3,10);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (3,11);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (4,12);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (4,13);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (4,14);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (5,15);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (5,16);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (5,17);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (6,18);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (6,19);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (6,20);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (7,21);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (7,22);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (7,23);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (8,24);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (8,25);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (8,26);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (9,27);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (9,28);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (9,29);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (10,30);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (10,31);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (10,32);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (11,33);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (11,34);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (11,35);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (12,36);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (12,37);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (12,38);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (13,39);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (13,40);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (13,41);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (14,42);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (14,43);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (14,44);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (15,45);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (15,46);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (15,47);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (16,48);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (16,49);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (16,50);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (17,51);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (17,52);
INSERT INTO Areas_tree (area_id1, area_id2) VALUES (17,53);

select * from Areas_tree;

--DELETE FROM Areas_tree;

-- **************************************************************************************************
--INSERTS EN ROLES
INSERT INTO Roles (type) VALUES ('Estudiante');
INSERT INTO Roles (type) VALUES ('Profesor');
INSERT INTO Roles (type) VALUES ('Administrador');
INSERT INTO Roles (type) VALUES ('Bibliotecario');
INSERT INTO Roles (type) VALUES ('Rector');
INSERT INTO Roles (type) VALUES ('Personal');
INSERT INTO Roles (type) VALUES ('Invitado');

select * from Roles;

--DELETE FROM Roles;

-- **************************************************************************************************
--INSERTS EN CARDS
INSERT INTO Cards (card_id, status) VALUES ('8000001', 'active');
INSERT INTO Cards (card_id, status) VALUES ('9000002', 'disable');
INSERT INTO Cards (card_id, status) VALUES ('10000003', 'active');
INSERT INTO Cards (card_id, status) VALUES ('12000004', 'active');
INSERT INTO Cards (card_id, status) VALUES ('15000005', 'active');
INSERT INTO Cards (card_id, status) VALUES ('18000006', 'active');
INSERT INTO Cards (card_id, status) VALUES ('20000007', 'active');
INSERT INTO Cards (card_id, status) VALUES ('22000008', 'active');
INSERT INTO Cards (card_id, status) VALUES ('25000009', 'lost');
INSERT INTO Cards (card_id, status) VALUES ('27000010', 'active');
INSERT INTO Cards (card_id, status) VALUES ('29000011', 'active');
INSERT INTO Cards (card_id, status) VALUES ('30000012', 'active');
INSERT INTO Cards (card_id, status) VALUES ('31000013', 'active');
INSERT INTO Cards (card_id, status) VALUES ('32000014', 'active');
INSERT INTO Cards (card_id, status) VALUES ('33000015', 'lost');

select * from Cards;

--DELETE FROM Cards;

-- **************************************************************************************************
--INSERTS EN USERS
INSERT INTO Users (password, name, last_name, departament, status) VALUES ('password1', 'Juan', 'Pérez', 'Informática', 'active');
INSERT INTO Users (password, name, last_name, departament, status) VALUES ('password2', 'María', 'García', 'Civil', 'inactive');
INSERT INTO Users (password, name, last_name, departament, status) VALUES ('password3', 'Pedro', 'Ramírez', 'Industrial', 'active');
INSERT INTO Users (password, name, last_name, departament, status) VALUES ('password4', 'Ana', 'López', 'Administración', 'inactive');
INSERT INTO Users (password, name, last_name, departament, status) VALUES ('password5', 'Luis', 'González', 'Contaduría', 'active');
INSERT INTO Users (password, name, last_name, departament, status) VALUES ('password6', 'Carla', 'Martínez', 'Comunicación', 'inactive');
INSERT INTO Users (password, name, last_name, departament, status) VALUES ('password7', 'Diego', 'Sánchez', 'Recursos Humanos', 'active');
INSERT INTO Users (password, name, last_name, departament, status) VALUES ('password8', 'Fernando', 'Gómez', 'Informática', 'inactive');
INSERT INTO Users (password, name, last_name, departament, status) VALUES ('password9', 'Sofía', 'Pérez', 'Civil', 'active');
INSERT INTO Users (password, name, last_name, departament, status) VALUES ('password10', 'Isabella', 'García', 'Industrial', 'inactive');
INSERT INTO Users (password, name, last_name, departament, status) VALUES ('password11', 'Lucas', 'Ramírez', 'Administración', 'active');
INSERT INTO Users (password, name, last_name, departament, status) VALUES ('password12', 'Valentina', 'López', 'Contaduría', 'inactive');
INSERT INTO Users (password, name, last_name, departament, status) VALUES ('password13', 'Gabriel', 'González', 'Comunicación', 'active');
INSERT INTO Users (password, name, last_name, departament, status) VALUES ('password14', 'Mariana', 'Martínez', 'Recursos Humanos', 'inactive');
INSERT INTO Users (password, name, last_name, departament, status) VALUES ('password15', 'Mateo', 'Sánchez', 'Informática', 'active');

select * from Users;

--DELETE FROM Users;


-- **************************************************************************************************
--INSERTS EN DEVICES
INSERT INTO Devices (topic_res, topic_req, type, status, name, password) VALUES ('ucab/biblioteca', 'ucab/biblioteca/hear', 'thermostat', 'active', 'device1', 'password1');
INSERT INTO Devices (topic_res, topic_req, type, status, name, password) VALUES ('ucab/modulo1', 'ucab/modulo1/hear', 'irrigation', 'inactive', 'device2', 'password2');
INSERT INTO Devices (topic_res, topic_req, type, status, name, password) VALUES ('ucab/modulo1/piso1', 'ucab/modulo1/piso1/hear', 'lighting', 'active', 'device3', 'password3');
INSERT INTO Devices (topic_res, topic_req, type, status, name, password) VALUES ('ucab/modulo1/piso1/a1-11', 'ucab/modulo1/piso1/a1-11/hear', 'security', 'inactive', 'device4', 'password4');
INSERT INTO Devices (topic_res, topic_req, type, status, name, password) VALUES ('ucab/modulo2/piso2/a2-22', 'ucab/modulo2/piso2/a2-22/hear', 'irrigation', 'active', 'device5', 'password5');
INSERT INTO Devices (topic_res, topic_req, type, status, name, password) VALUES ('ucab/modulo2/piso1', 'ucab/modulo2/piso1/hear', 'fire alarm', 'active', 'device6', 'password6');
INSERT INTO Devices (topic_res, topic_req, type, status, name, password) VALUES ('ucab/modulo3', 'ucab/modulo3/hear', 'air quality', 'inactive', 'device7', 'password7');
INSERT INTO Devices (topic_res, topic_req, type, status, name, password) VALUES ('ucab/biblioteca/piso1', 'ucab/biblioteca/piso1/hear', 'irrigation', 'active', 'device8', 'password8');
INSERT INTO Devices (topic_res, topic_req, type, status, name, password) VALUES ('ucab/biblioteca/piso2/rectorado', 'ucab/biblioteca/piso2/rectorado/hear', 'access control', 'inactive', 'device9', 'password9');
INSERT INTO Devices (topic_res, topic_req, type, status, name, password) VALUES ('ucab/biblioteca/piso2', 'ucab/biblioteca/piso2/hear', 'energy management', 'active', 'device10', 'password10');
INSERT INTO Devices (topic_res, topic_req, type, status, name, password) VALUES ('ucab/biblioteca/piso2/vicerectorado', 'ucab/biblioteca/piso2/vicerectorado/hear', 'flood control', 'inactive', 'device11', 'password11');
INSERT INTO Devices (topic_res, topic_req, type, name, password) VALUES ('ucab/biblioteca/piso2/vicerectorado', 'ucab/biblioteca/piso2/vicerectorado/hear', 'flood control', 'device12', 'password12');

select * from Devices;

--DELETE FROM Devices;

-- **************************************************************************************************
--INSERTS EN USER_TYPES
INSERT INTO User_types (rol_id, user_id) VALUES (1, 1);
INSERT INTO User_types (rol_id, user_id) VALUES (2, 2);
INSERT INTO User_types (rol_id, user_id) VALUES (3, 3);
INSERT INTO User_types (rol_id, user_id) VALUES (4, 4);
INSERT INTO User_types (rol_id, user_id) VALUES (1, 5);
INSERT INTO User_types (rol_id, user_id) VALUES (2, 6);
INSERT INTO User_types (rol_id, user_id) VALUES (3, 7);
INSERT INTO User_types (rol_id, user_id) VALUES (4, 8);
INSERT INTO User_types (rol_id, user_id) VALUES (1, 9);
INSERT INTO User_types (rol_id, user_id) VALUES (2, 10);
INSERT INTO User_types (rol_id, user_id) VALUES (3, 11);
INSERT INTO User_types (rol_id, user_id) VALUES (4, 12);
INSERT INTO User_types (rol_id, user_id) VALUES (1, 13);
INSERT INTO User_types (rol_id, user_id) VALUES (2, 14);
INSERT INTO User_types (rol_id, user_id) VALUES (3, 15);

select * from User_types;

--DELETE FROM User_types;




-- **************************************************************************************************
--INSERTS EN USER_CARDS
INSERT INTO User_cards (user_id, card_id) VALUES (1, '8000001');
INSERT INTO User_cards (user_id, card_id) VALUES (2, '9000002');
INSERT INTO User_cards (user_id, card_id) VALUES (3, '10000003');
INSERT INTO User_cards (user_id, card_id) VALUES (4, '12000004');
INSERT INTO User_cards (user_id, card_id) VALUES (1, '15000005');
INSERT INTO User_cards (user_id, card_id) VALUES (2, '18000006');
INSERT INTO User_cards (user_id, card_id) VALUES (3, '20000007');
INSERT INTO User_cards (user_id, card_id) VALUES (4, '22000008');
INSERT INTO User_cards (user_id, card_id) VALUES (1, '25000009');
INSERT INTO User_cards (user_id, card_id) VALUES (2, '27000010');
INSERT INTO User_cards (user_id, card_id) VALUES (3, '29000011');
INSERT INTO User_cards (user_id, card_id) VALUES (4, '30000012');
INSERT INTO User_cards (user_id, card_id) VALUES (1, '31000013');
INSERT INTO User_cards (user_id, card_id) VALUES (2, '32000014');
INSERT INTO User_cards (user_id, card_id) VALUES (3, '33000015');

select * from User_cards;

--DELETE FROM User_cards;

-- **************************************************************************************************
--INSERTS EN Card_access_points
INSERT INTO Card_access_points (card_id, area_id) VALUES ('8000001', 1);
INSERT INTO Card_access_points (card_id, area_id) VALUES ('8000001', 2);
INSERT INTO Card_access_points (card_id, area_id) VALUES ('8000001', 3);
INSERT INTO Card_access_points (card_id, area_id) VALUES ('9000002', 4);
INSERT INTO Card_access_points (card_id, area_id) VALUES ('9000002', 5);
INSERT INTO Card_access_points (card_id, area_id) VALUES ('9000002', 6);
INSERT INTO Card_access_points (card_id, area_id) VALUES ('10000003', 7);
INSERT INTO Card_access_points (card_id, area_id) VALUES ('10000003', 8);
INSERT INTO Card_access_points (card_id, area_id) VALUES ('10000003', 9);
INSERT INTO Card_access_points (card_id, area_id) VALUES ('12000004', 10);
INSERT INTO Card_access_points (card_id, area_id) VALUES ('12000004', 11);
INSERT INTO Card_access_points (card_id, area_id) VALUES ('12000004', 12);
INSERT INTO Card_access_points (card_id, area_id) VALUES ('15000005', 13);
INSERT INTO Card_access_points (card_id, area_id) VALUES ('15000005', 14);
INSERT INTO Card_access_points (card_id, area_id) VALUES ('15000005', 15);

select * from Card_access_points;

--DELETE FROM Card_access_points;

-- **************************************************************************************************
--INSERTS EN Roles_access_points
INSERT INTO Roles_access_points (rol_id, area_id) VALUES (1, 1);
INSERT INTO Roles_access_points (rol_id, area_id) VALUES (1, 2);
INSERT INTO Roles_access_points (rol_id, area_id) VALUES (1, 3);
INSERT INTO Roles_access_points (rol_id, area_id) VALUES (2, 4);
INSERT INTO Roles_access_points (rol_id, area_id) VALUES (2, 5);
INSERT INTO Roles_access_points (rol_id, area_id) VALUES (2, 6);
INSERT INTO Roles_access_points (rol_id, area_id) VALUES (3, 7);
INSERT INTO Roles_access_points (rol_id, area_id) VALUES (3, 8);
INSERT INTO Roles_access_points (rol_id, area_id) VALUES (3, 9);
INSERT INTO Roles_access_points (rol_id, area_id) VALUES (4, 10);
INSERT INTO Roles_access_points (rol_id, area_id) VALUES (4, 11);
INSERT INTO Roles_access_points (rol_id, area_id) VALUES (4, 12);
INSERT INTO Roles_access_points (rol_id, area_id) VALUES (5, 13);
INSERT INTO Roles_access_points (rol_id, area_id) VALUES (5, 14);
INSERT INTO Roles_access_points (rol_id, area_id) VALUES (5, 15);

select * from Roles_access_points;

--DELETE FROM Roles_access_points;

-- **************************************************************************************************
--INSERTS EN Card_access

INSERT INTO Card_access (card_id, area_id, access_date, access_data) VALUES ('8000001', 1, NOW(), 'passed');
INSERT INTO Card_access (card_id, area_id, access_date, access_data) VALUES ('8000001', 2, NOW(), 'not passed');
INSERT INTO Card_access (card_id, area_id, access_date, access_data) VALUES ('9000002', 3, NOW(), 'passed');
INSERT INTO Card_access (card_id, area_id, access_date, access_data) VALUES ('9000002', 4, NOW(), 'not passed');
INSERT INTO Card_access (card_id, area_id, access_date, access_data) VALUES ('10000003', 5, NOW(), 'passed');
INSERT INTO Card_access (card_id, area_id, access_date, access_data) VALUES ('10000003', 6, NOW(), 'not passed');
INSERT INTO Card_access (card_id, area_id, access_date, access_data) VALUES ('12000004', 7, NOW(), 'passed');
INSERT INTO Card_access (card_id, area_id, access_date, access_data) VALUES ('12000004', 8, NOW(), 'not passed');
INSERT INTO Card_access (card_id, area_id, access_date, access_data) VALUES ('15000005', 9, NOW(), 'passed');
INSERT INTO Card_access (card_id, area_id, access_date, access_data) VALUES ('15000005', 10, NOW(), 'not passed');
INSERT INTO Card_access (card_id, area_id, access_date, access_data) VALUES ('18000006', 11, NOW(), 'passed');
INSERT INTO Card_access (card_id, area_id, access_date, access_data) VALUES ('18000006', 12, NOW(), 'not passed');
INSERT INTO Card_access (card_id, area_id, access_date, access_data) VALUES ('20000007', 13, NOW(), 'passed');
INSERT INTO Card_access (card_id, area_id, access_date, access_data) VALUES ('20000007', 14, NOW(), 'not passed');
INSERT INTO Card_access (card_id, area_id, access_date, access_data) VALUES ('22000008', 15, NOW(), 'passed');

select * from Card_access;

--DELETE FROM Card_access;


-- **************************************************************************************************
--INSERTS EN Card_access

INSERT INTO Areas_time (area_id, hora_entrada, hora_salida) VALUES (1, '09:00:00', '17:00:00');
INSERT INTO Areas_time (area_id, hora_entrada, hora_salida) VALUES (2, '08:00:00', '16:00:00');
INSERT INTO Areas_time (area_id, hora_entrada, hora_salida) VALUES (3, '07:00:00', '15:00:00');
INSERT INTO Areas_time (area_id, hora_entrada, hora_salida) VALUES (4, '10:00:00', '18:00:00');
INSERT INTO Areas_time (area_id, hora_entrada, hora_salida) VALUES (5, '11:00:00', '19:00:00');
INSERT INTO Areas_time (area_id, hora_entrada, hora_salida) VALUES (6, '12:00:00', '20:00:00');
INSERT INTO Areas_time (area_id, hora_entrada, hora_salida) VALUES (7, '13:00:00', '21:00:00');
INSERT INTO Areas_time (area_id, hora_entrada, hora_salida) VALUES (8, '14:00:00', '22:00:00');
INSERT INTO Areas_time (area_id, hora_entrada, hora_salida) VALUES (9, '15:00:00', '23:00:00');
INSERT INTO Areas_time (area_id, hora_entrada, hora_salida) VALUES (10, '16:00:00', '00:00:00');
INSERT INTO Areas_time (area_id, hora_entrada, hora_salida) VALUES (11, '17:00:00', '01:00:00');
INSERT INTO Areas_time (area_id, hora_entrada, hora_salida) VALUES (12, '18:00:00', '02:00:00');
INSERT INTO Areas_time (area_id, hora_entrada, hora_salida) VALUES (13, '19:00:00', '03:00:00');
INSERT INTO Areas_time (area_id, hora_entrada, hora_salida) VALUES (14, '20:00:00', '04:00:00');
INSERT INTO Areas_time (area_id, hora_entrada, hora_salida) VALUES (15, '21:00:00', '05:00:00');

select * from Areas_time;

--DELETE FROM Areas_time;

