import sequelize  from '../database/database_connect.js';
import { DataTypes } from "sequelize"

const Card_access = sequelize.define('card_access',{
    card_id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    area_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    access_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    access_data: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    timestamps: false
})

export default Card_access;