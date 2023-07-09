import sequelize  from '../database/database_connect.js';
import { DataTypes } from "sequelize"

const User_cards = sequelize.define('User_cards',{
    rol_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    card_id: {
        type: DataTypes.STRING(9),
        primaryKey: true
    }
},{
    timestamps: false
})

export default User_cards;