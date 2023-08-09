const express = require("express")
var bodyParser = require('body-parser')
const port = 8000
const db = require("./config/mongoose")
const todo =require("./model/todo")

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json()); 

// using express router
app.use("/", require("./routes"))
// app.use(express.urlencoded())
app.use(express.static("assets"))


//usning view engine
app.set("view engine","ejs");
app.set("views","./views")

// starting the server on the port
app.listen(port,(err)=>{
    if(err){
        console.log(`Error in starting the server: ${err}`);
    }
    console.log("Server is up and running at port", port);
})
