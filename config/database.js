const { DB } =require("./config");

const{Sequelize}= require("sequelize");


console.log(DB.NAME)
const db=new Sequelize(DB.NAME, DB.USER, DB.PASSWORD, {
    host: DB.HOST,
    dialect: DB.DIALECT,

});


module.exports = { db };