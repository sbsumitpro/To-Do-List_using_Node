Todo = require("../model/todo")

// This is to fetch all the existing task into the homepage
module.exports.home = (req,res)=>{
    Todo.find({})
    .catch((err)=>
    {console.log("error");return;})
    .then((Todos)=>{
        res.render("home",{
            title:"My Contacts",
            todo_list:Todos
        })
})
}

// For creating new Tasks
module.exports.createTask = (req,res)=>{
    Todo.create(req.body)
    .catch((err)=>{
        console.log("Some error in creating contact",err);
    })
    .then((newTodo)=>{
        console.log("***************", newTodo);
        res.redirect("back")
    })
}

// For deletion from Database
module.exports.deleteTask = (req, res)=>{
    var id = req.query;
    var count = Object.keys(id).length
    console.log(id, count,  Object.keys(id))
    for(let i  = 0; i<count; i++){
        Todo.findByIdAndDelete(Object.keys(id)[i])
        .then((todo)=>{
            console.log("deleted successfully")
        })
        .catch((err)=>{
            console.log("Error in deletion", err);
        })
    }
    return res.redirect("/")

}

