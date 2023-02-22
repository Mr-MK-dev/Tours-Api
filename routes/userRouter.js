const express = require('express')
const userRoute = express.Router()
const userController = require('../controller/userController')


userRoute.route('/top5users').get(userController.getAllUsers)

userRoute.route('/user')
    .get(userController.getAllUsers)
    .post(userController.createUser)

userRoute.route('/user/:id')
    .get(userController.getUser)
    .delete(userController.deleteUser)
    .patch(userController.updateUser)



module.exports = userRoute