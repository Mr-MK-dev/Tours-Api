const express = require('express')
const tourController = require('../controller/tourController')
const tourRoute = express.Router()



tourRoute.route('/tour')
    .get(tourController.getAllTour)
    .post(tourController.createTour)

tourRoute.route('/tour/:id')
    .delete(tourController.deleteTour)
    .patch(tourController.updateTour)



module.exports = tourRoute