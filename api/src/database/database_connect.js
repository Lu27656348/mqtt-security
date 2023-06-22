const Sequelize = require('sequelize');

module.exports.sequelize  = new Sequelize("postgres://postgres:admin@localhost:5432/mqttsecurity_test",{
    define: {
        freezeTableName: true
    }
});


