// ENTRYPOINT - run the actual program

//clg shortcut for console.log()
// get data
// convert to json
// convert to response 
// send it back...

//daemon = applications running in the background - using nodemon
// uses constructor to create an express application (object) instance
const app = require('./app')
const port = 3000

// this functionality will move to another layer
// // when client makes get request to '/' (endpoint) heres what to do
// app.get('/', (req, res) => {
//     // res.send("Hello World")
//     // can write literal json too:
//     res.send({"Welcome": "Hello World"})
// } )

// // different request because its a different command verb
// app.get('/query', (req, res) => {
//     // params of request include what has been input / sent as part of the request...
//     res.send(req.params)
// })

// // predicts id key from / in param
// app.get('/param/:id', (req, res) => {
//     res.send(req.params)
// })

// telling the app to run i.e. listen for a request on the port
app.listen(port, () => {
    // express has everything to build the http response but the body - thats this console log we provided
    console.log(`Simple App listening on ${port}`);
})

// this returns a ready made http response with start line, headers, empty line an body!