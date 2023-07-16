import Sequelize from 'sequelize';

const sequelize  = new Sequelize("postgres://postgres:admin@localhost:5432/mqttsecurity_test",{
    define: {
        freezeTableName: true
    }
});

export default sequelize;


