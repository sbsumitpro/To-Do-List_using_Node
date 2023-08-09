const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/todo_list_db")

const db =mongoose.connection;

db.on("error", console.log.bind(console,"error connecting to DB"))
db.once("open", function(){
    console.log("Successfully connected to the DB");
})