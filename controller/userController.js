const User = require('../models/User')
const { Features } = require('../utils/Features')


async function getAllUsers(req, res) {
    const clonning = new Features()
    clonning.cloningQuery(req.query)
    const sort = req.query.sort || "ID_KEY",
        limit = req.query.limit * 1 || 5,
        offset = limit * req.query.page || 0,
        sattributes = req.query.fileds
    // const attributes = () => {
    //     if (sattributes) {
    //         return sattributes.split(',')
    //     }
    // }

    const attributes = sattributes.split(',')
    console.log(`reqQuery`, req.query);
    const tours = await User.findAll({ where: clonning, order: [sort], limit, offset: offset, attributes })
    res.json({
        tours
    })



}




async function createUser(req, res) {
    const { email, firstName, lastName, gender, age } = req.body


    await User.create(req.body).then(
        x => {
            const showData = new api.JsonData(res, x)
            showData.showData()
        }
    )

}

async function getUser(req, res) {
    const theUser = await User.findOne({ where: { ID_KEY: req.params.id } })
    res.json({
        theUser
    })
}
async function deleteUser(req, res) {

    await User.destroy({ where: { ID_KEY: req.params.id } }).then(
        res.json({
            msg: "User deleted successfully"
        })
    )
}
async function updateUser(req, res) {
    const user = await User.update(req.body, { where: { ID_KEY: req.params.id } })
    res.json({
        user
    })


}

module.exports = {
    getAllUsers,
    createUser,
    deleteUser,
    getUser,
    updateUser
}


// CRUD OPS
// Pagination
