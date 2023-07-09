import sequelize  from '../database/database_connect.js';
import { DataTypes } from "sequelize"

const devices = sequelize.define('Devices',{
    device_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    topic_res: {
        type: DataTypes.STRING,
        allowNull: true
    },
    topic_req: {
        type: DataTypes.STRING,
        allowNull: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING,
        allowNull: true
    },
    area_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},{
    timestamps: false
})

export default Card_access_points;