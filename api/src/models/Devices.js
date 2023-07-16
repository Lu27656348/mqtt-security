import sequelize  from '../database/database_connect.js';
import { DataTypes } from "sequelize"

const Devices = sequelize.define('devices',{
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
        allowNull: false,
        defaultValue: "OFF"
    },
    area_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

},{
    timestamps: false
})

export default Devices;