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
        return fruits.map(f => new Fruit(f))
    }

    static getFruit(name) {
        // using find not filter - find is good for returning one object, filter returns array
        const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == name)

        if (fruit) {
            return new Fruit(fruit)
        } else {
            return "fruit not found"
        }


        return fruit
    }
}

// const testFruit = fruits.filter(fruit => fruit.name.toLowerCase()=="apple")
// console.log(testFruit);

module.exports = Fruit