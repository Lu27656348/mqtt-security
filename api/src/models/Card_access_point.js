import sequelize  from '../database/database_connect.js';
import { DataTypes } from "sequelize"

const Card_access_points = sequelize.define('card_access_points',{
    card_id: {
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

export default Card_access_points;