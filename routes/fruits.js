// ROUTE LAYER - connect endpoint with function
// Add to the api the ability to search for a fruit by name like so http://localhost:3000/fruits/apple - Answer is in the complete code

const express = require("express")
const router = express.Router()
const fruits = require("../controller/fruits")

// maps endpoint '/' to fruits.index controller function
// doesnt need the brackets because its middleware - more interested in the object than the function
router.get('/', fruits.index)

module.exports = router