const axios = require('axios');

export default axios.create({
    baseURL: process.env.APLICATION_SERVER
});
