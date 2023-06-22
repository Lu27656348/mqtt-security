const sequelize = require('../database/database_connect.js');
const { DataTypes } = require('sequelize');

const topic = sequelize.sequelize.define('topics',{
    id_topic: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: true
    },
    estado: {
        type: DataTypes.STRING(20),
        allowNull: true
    }
},{
    timestamps: false
})
module.exports = {
    topic: topic
}