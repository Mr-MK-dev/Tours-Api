const Tour = require('../models/Tour')
const { Features } = require('../utils/Features')



async function getAllTour(req, res) {
    const reqClone = new Features()
    reqClone.cloningQuery(req.query)
    const sort = req.query.sort || "ID_KEY",
        limit = req.query.limit * 1 || 5,
        offset = limit * req.query.page || 0,
        sattributes = req.query.fileds

    const attributes = sattributes.split(',')
    console.log(attributes, "ATTRUBUTIES");


    console.log(`reqQuery`, req.query);
    const tours = await Tour.findAll({ where: reqClone, order: [sort], limit, offset: offset, attributes: attributes })
    res.json({
        tours
    })
}


async function createTour(req, res) {
    await Tour.create(req.body).then(x => {
        res.json({
            msg: 'Tour created'
        })
    })
}


async function deleteTour(req, res) {
    const id = req.params.id
    await Tour.destroy({ where: { ID_KEY: id } }).then(x => {
        res.json({
            msg: 'Tour deleted'
        })
    })
}

async function updateTour(req, res) {
    const tour = req.body
    const id = req.params.id

    await Tour.update(tour, { where: { ID_KEY: id } }).then(x => {
        res.json({
            msg: 'Tour updated'
        })
    })
}


module.exports = {
    createTour,
    getAllTour,
    deleteTour,
    updateTour
}