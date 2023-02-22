const express = require('express')
const app = express()
const userRouter = require('./routes/userRouter')
const tourRouter = require('./routes/tourRoutes')
const cors = require('cors')
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cors())
app.use(cookieParser());

app.use('/api/v1', userRouter)
app.use('/api/v1', tourRouter)


module.exports = app