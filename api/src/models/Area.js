import sequelize  from '../database/database_connect.js';
import { DataTypes } from "sequelize"

const Area = sequelize.define('Areas',{
    area_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    area_topic: {
        type: DataTypes.STRING,
        allowNull: false
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false
})

export default Area;