console.log("hello");
const checkBx = document.querySelector("input[checkbox]")
const tasks = document.querySelectorAll(".tasks");


var isChecked = false
var taskIds=[]

document.addEventListener("click",(e)=>{
    // e.preventDefault()
    // console.log(e);
    if(e.target.name == "checkBx"){
        let task_id = e.target.id
        if(e.target.checked==true){
            taskIds.push(task_id)
            
        }else{
            taskIds= taskIds.filter((item)=>{
                return item!=task_id
            })
        }
        console.log(taskIds)
        // sessionStorage.setItem("task_id_list", taskIds)
        window.open(`http://localhost:8000/delete-task?task_id=${taskIds}`,"_self")
    }

})