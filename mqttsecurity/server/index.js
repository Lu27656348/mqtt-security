import express from "express";
import { PORT } from "./config.js";
import { pool } from './db.js';
import indexRoutes from './routes/index.routes.js';
import LectoresRoutes from './routes/lectores.routes.js';

async function comprobarConexion() {
  try {
    // Obtener una conexión de la piscina
    const connection = await pool.getConnection();

    // Ejecutar una consulta simple
    const [rows, fields] = await connection.execute('SELECT 1');

    // Liberar la conexión
    connection.release();

    console.log('¡La conexión a la base de datos está funcionando correctamente!');
  } catch (error) {
    console.error('Error al comprobar la conexión a la base de datos:', error);
  }
}

// Servidor
const app = express();
// Configuraciones
app.use(express.json());

// Rutas
app.use(indexRoutes);
app.use(LectoresRoutes);

app.listen(PORT);
console.log(`Server listening on port ${PORT}`);
// comprobarConexion();
