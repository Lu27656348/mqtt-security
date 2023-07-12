import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost", // dirección del servidor MySQL
  user: "root", // nombre de usuario de la base de datos
  password: "", // contraseña de la base de datos
  database: "distri", // nombre de la base de datos
  waitForConnections: true, // si se deben esperar conexiones en caso de que todas estén ocupadas
  connectionLimit: 10, // número máximo de conexiones simultáneas permitidas
  queueLimit: 0 // número máximo de conexiones en cola permitidas (0 significa no hay límite)
});