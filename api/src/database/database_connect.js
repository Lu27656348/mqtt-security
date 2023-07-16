import Sequelize from 'sequelize';

const sequelize  = new Sequelize("postgres://lbsfauxe:Ba7h4_mCkiLdXgqB5oElZaanhvGPo3Cs@silly.db.elephantsql.com/lbsfauxe",{
    define: {
        freezeTableName: true
    }
});

export default sequelize;


