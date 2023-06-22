const { topic } = require('../models/Topic.js');
const sequelize = require('../database/database_connect.js');

const getAllTopics = async (req,res) => {
    const search = await topic.findAll();
    res.json(search);
}

module.exports = {
    getAllTopics
}
