// MODEL LAYER - handles data and translates to JSON (normally)
// '..' goes to folder above
const fruits = require("../fruits.json")

class Fruit {
    constructor(fruit) {
        // this only works because we are getting the data from a json file
        this.genus = fruit.genus
        this.name = fruit.name
        this.id = fruit.id
        this.family = fruit.family
        this.order = fruit.order
        this.nutritions = fruit.nutritions
    }

    static showAll() {
        return fruits.map(f => new Fruit(f)).filter(f => f.name)
    }
}

module.exports = Fruit