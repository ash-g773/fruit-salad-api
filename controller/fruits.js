const Fruit = require('../models/Fruit')

//async function because we dont know how long it will take
const index = async (req, res) => {
    // try-catch : something might go wrong, if it does, catch it so i can present it
    try { 
        // await because we dont know how long it will take
        const fruits = await Fruit.showAll()
        // gives status code to return
        res.status(200).send(fruits) //regularly we would have to convert this to json
    } catch(err) {
        res.status(500).send({error: err})
    }
    
}

const findFruit = async (req, res) => {
    const name = req.params.name.toLowerCase()

    try {
        const fruitName = await Fruit.getFruit(name)
        res.status(200).send(fruitName)

    } catch(err) {
        res.status(500).send({error: err})
    }
}

module.exports = {
    index,
    findFruit,
}