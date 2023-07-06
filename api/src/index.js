import app from './app.js';
import sequelize from './database/database_connect.js';

const connect = async () => {
    try {
        await sequelize.authenticate();
        app.listen(3000);
        console.log("Servidor iniciado con exito en el puerto 3000")
    } catch (error) {
        console.error("Error al iniciar el servidor");
        console.error(error);
    }
}

connect();