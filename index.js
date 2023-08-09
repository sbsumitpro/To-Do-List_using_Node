const express = require("express")
var bodyParser = require('body-parser')
const port = 8000

// Creating the momgodb connection
const db = require("./config/mongoose")

//calling the mongoDB Schema
const todo =require("./model/todo")

const app = express()

// This is require to parse the form data into server
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json()); 

// using express router
app.use("/", require("./routes"))
// app.use(express.urlencoded())
app.use(express.static("assets"))


//setting up the view engine
app.set("view engine","ejs");
app.set("views","./views")

// starting the server on the port
app.listen(port,(err)=>{
    if(err){
        console.log(`Error in starting the server: ${err}`);
    }
    console.log("Server is up and running at port", port);
})
