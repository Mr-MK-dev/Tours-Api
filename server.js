const app = require('./app')
require('dotenv').config()
const port = process.env.PORT || 3030
const myConnection = require('./utils/db')

myConnection.sync().then(() => {
    app.listen(port, () => {
        return console.log(`lcoalhost:${port}/api/v1/`);
    })
})