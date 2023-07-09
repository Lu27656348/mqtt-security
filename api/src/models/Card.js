import sequelize  from '../database/database_connect.js';
import { DataTypes } from "sequelize"

const Card = sequelize.define('Cards',{
    card_id: {
        type: DataTypes.STRING(9),
        primaryKey: true,
        autoIncrement: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false
})

export default Card;