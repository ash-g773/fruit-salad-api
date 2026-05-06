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
    // grab parameters to be used + assign
    const name = req.params.name.toLowerCase()

    try {
        const fruitName = await Fruit.getFruit(name)
        res.status(200).send(fruitName)

    } catch(err) {
        res.status(500).send({error: err})
    }
}

const createFruit = async (req, res) => {
    const fruitData = req.body

    try {
        const fruitObj = await Fruit.create(fruitData)
        res.status(200).send(fruitObj)
    } catch(err) {
        // http status 409 for conflict
        res.status(409).send({error: err})
    }
}

const updateFruit = async (req, res) => {
    const name = req.params.name.toLowerCase()

    try {
        const fruit = await Fruit.getFruit(name)
        const updatedFruit = await fruit.update(req.body)
        res.status(200).send(updatedFruit)
    } catch(err) {
        // http status 404 for not found
        res.status(404).send({error: "Error thrown"})
    }
}

const deleteFruit = async (req, res) => {
    const name = req.params.name.toLowerCase()

    try {
        const fruit = await Fruit.getFruit(name)
        const deletedFruit = await fruit.delete()
        res.status(200).send(deletedFruit)
    } catch(err) {
        res.status(404).send({error: err})
    }
}

module.exports = {
    index,
    findFruit,
    createFruit,
    updateFruit,
    deleteFruit,
}