const { Router } = require('express');
const {getAllTopics} = require('../controllers/topics_controller');
const {verify} = require('../../middleware/verify.js');

const routerTopic = Router();

routerTopic.get('auth/all-topic',verify, getAllTopics);

module.exports = {
    routerTopic
}