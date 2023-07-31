const express = require("express")
const port = 8000

const app = express()

// using express router
app.use("/", require("./routes"))

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
