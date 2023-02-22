const Tour = require('../models/Tour')
const User = require('../models/User')
const users = require('../data/users.json')
const tours = require('../data/tours-simple.json')


async function loadData(users) {
    users.forEach(async x => {
        console.log(`------------***********-----------`);
        console.log(x);
        console.log(`------------***********-----------`);
        await User.create(x)
    })
}

// loadData(users)
function loadData(tours) {
    tours.forEach(async x => {
        console.log(`------------***********-----------`);
        console.log(x);
        console.log(`------------***********-----------`);
        await Tour.create(x)
    })
}

loadData(tours)