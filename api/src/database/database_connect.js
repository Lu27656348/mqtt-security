import Sequelize from 'sequelize';
//const database = "postgres://postgres:admin@localhost:5432/mqttsecurity_test"
//const database = "postgres://lbsfauxe:Ba7h4_mCkiLdXgqB5oElZaanhvGPo3Cs@silly.db.elephantsql.com/lbsfauxe"
const database = "postgresql://postgres:NTWCbyUbv0r7mIfWyhnw@containers-us-west-160.railway.app:6589/railway"
const sequelize  = new Sequelize(database,{
    define: {
        freezeTableName: true
    }
});

export default sequelize;


