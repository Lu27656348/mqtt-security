import sequelize  from '../database/database_connect.js';
import { DataTypes } from "sequelize"

const Client  = sequelize.define('client',{
    client_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }

},{
    timestamps: false
})

export default Client;