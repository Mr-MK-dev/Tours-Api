const Sequelize = require('sequelize')
const sequelize = require('../utils/db')

const Tour = sequelize.define('Tour', {
    ID_KEY: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    duration: {
        type: Sequelize.INTEGER
    },
    maxGroupSize: {
        type: Sequelize.INTEGER
    },
    difficulty: {
        type: Sequelize.STRING
    },
    ratingsAverage: { type: Sequelize.INTEGER },
    ratingsQuantity: { type: Sequelize.INTEGER },
    price: { type: Sequelize.INTEGER },
    summary: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    imageCover: { type: Sequelize.STRING },
    // images: { type: Sequelize.ARRAY(Sequelize.STRING) },
    // startDates: { type: Sequelize.ARRAY(Sequelize.DATE) }
})


module.exports = Tour

