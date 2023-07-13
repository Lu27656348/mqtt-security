import app from './app.js';
import sequelize from './database/database_connect.js';

const connect = async () => {
    try {
        await sequelize.authenticate();
        app.listen(3030);
        console.log("Servidor iniciado con exito en el puerto 3030")
    } catch (error) {
        console.error("Error al iniciar el servidor");
    }
}

connect();