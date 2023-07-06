import Topic from '../models/Topic.js';
import sequelize from '../database/database_connect.js';

export const getAllTopics = async (req,res) => {
    const search = await Topic.findAll();
    res.json(search);
}