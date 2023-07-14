import Sequelize from 'sequelize';

const sequelize  = new Sequelize("postgres://postgres:26269828@localhost:5432/mqttsecurity_test",{
    define: {
        freezeTableName: true
    }
});

export default sequelize;


