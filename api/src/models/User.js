import sequelize  from '../database/database_connect.js';
import { DataTypes } from "sequelize"

const User = sequelize.define('Users',{
    user_id: {
        type: DataTypes.STRING(9),
        primaryKey: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    photo: {
        type: DataTypes.BLOB,
        allowNull: false
    }
},{
    timestamps: false
})

export default User;