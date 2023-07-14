DROP TABLE IF EXISTS Client;
CREATE TABLE Client(
	client_id SERIAL,
	name TEXT NOT NULL,
	password TEXT NOT NULL,
	PRIMARY KEY (client_id)
);
INSERT INTO Client(name,password) VALUES ('Luis', 'admin');
INSERT INTO Client(name,password) VALUES ('Oliver', 'admin');