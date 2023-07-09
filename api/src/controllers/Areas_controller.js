import Areas from '../models/Areas.js';
import sequelize from '../database/database_connect.js';
import { QueryTypes } from 'sequelize';

export const getAllTopics = async (req,res) => {
    const search = await sequelize.query("");
    res.json(search);
}
