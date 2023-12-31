const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String
    },
    dueDate:{
        type:String,
        required:true
    }
})

const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo