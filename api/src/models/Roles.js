import sequelize  from '../database/database_connect.js';
import { DataTypes } from "sequelize"

const Rol = sequelize.define('roles',{
    rol_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false
})

export default Rol;