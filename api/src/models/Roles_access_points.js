import sequelize  from '../database/database_connect.js';
import { DataTypes } from "sequelize"

const Roles_access_points = sequelize.define('Roles_access_points',{
    rol_id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    area_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
},{
    timestamps: false
})

export default Roles_access_points;