import Sequelize from 'sequelize';
//const database = "postgres://postgres:admin@localhost:5432/mqttsecurity_test"
const database = "postgres://lbsfauxe:Ba7h4_mCkiLdXgqB5oElZaanhvGPo3Cs@silly.db.elephantsql.com/lbsfauxe"
const sequelize  = new Sequelize(database,{
    define: {
        freezeTableName: true
    }
});

export default sequelize;


