const { Sequelize, Model } = require("sequelize")


const myConnection = new Sequelize('tours', 'mk', 'mk9569', {
    host: "127.0.0.1",
    dialect: 'mysql'
})


module.exports = myConnection