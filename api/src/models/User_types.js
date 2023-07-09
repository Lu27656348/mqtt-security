import sequelize  from '../database/database_connect.js';
import { DataTypes } from "sequelize"

const User_types = sequelize.define('User_types',{
    rol_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.STRING(9),
        primaryKey: true
    }
},{
    timestamps: false
})

export default User_types;