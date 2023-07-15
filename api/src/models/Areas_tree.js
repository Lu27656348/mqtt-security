import sequelize  from '../database/database_connect.js';
import { DataTypes } from "sequelize"

const Areas_tree = sequelize.define('areas_tree',{
    area_id1: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    area_id2: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
},{
    timestamps: false
})

export default Areas_tree;