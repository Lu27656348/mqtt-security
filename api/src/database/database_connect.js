const Sequelize = require('sequelize');

module.exports.sequelize  = new Sequelize("postgres://postgres:postgres@localhost:5432/mqttsecurity_test",{
    define: {
        freezeTableName: true
    }
});


