import app from './app.js';
import sequelize from './database/database_connect.js';

const connect = async () => {
    try {
        await sequelize.authenticate();
        app.listen(7000);
        console.log("Servidor iniciado con exito en el puerto 7000")
    } catch (error) {
        console.error("Error al iniciar el servidor");
        console.error(error);
    }
}

connect();