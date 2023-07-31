const express = require("express")
const port = 8000

const app = express()

app.listen(port,(req,res)=>{
    console.log("Server is up and running at port", port);
})
