// instructions to run the program

const express = require("express")
const app = express()
const fruits = require("./routes/fruits")

app.get('/', (req, res) => {
    res.send("Hello from the fruit salad api")
})

//if you hit any http request with the word 'fruits' in it, point those to the router
// useful for multiple roots ! i.e. /fruits/1 and fruits/id=999 etc
app.use('/fruits', fruits)

//when we dont pass a route, this function will run on all routes
// converts all html bodies sent into json
app.use(express.json())

module.exports = app
