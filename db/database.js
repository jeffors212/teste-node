import {Sequelize} from "sequelize";

const database = new Sequelize({
    dialect: 'sqlite',
    storage: './Users/jeff/meu_banco_de_dados.db'
});

export default database;
