const Sequelize = require('sequelize')
const sequelize = require('../utils/db')




const User = sequelize.define('User', {
    ID_KEY: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name:
    {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:
    {
        type: Sequelize.STRING,
        allowNull: false,
    },
    role: {
        type: Sequelize.ENUM('user', 'admin')
    },
    photo: {
        type: Sequelize.STRING
    },
    active: {
        type: Sequelize.BOOLEAN
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = User