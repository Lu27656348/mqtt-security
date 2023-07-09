import sequelize  from '../database/database_connect.js';
import { DataTypes } from "sequelize"

const topic = sequelize.define('topics',{
    topic_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
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

export default topic;