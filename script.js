let tasks = JSON.parse(localStorage.getItem("tasks")) || []

function addTask(){

let input=document.getElementById("taskInput")
let text=input.value.trim()

if(text==="") return

tasks.push({text:text,done:false})

input.value=""

saveTasks()
render()
}

function render(){

let list=document.getElementById("taskList")
list.innerHTML=""

tasks.forEach((task,index)=>{

let li=document.createElement("li")

if(task.done)
li.classList.add("completed")

li.innerText=task.text

li.onclick=function(){
task.done=!task.done
saveTasks()
render()
}

let del=document.createElement("button")
del.innerText="X"
del.className="delete"

del.onclick=function(e){
e.stopPropagation()
tasks.splice(index,1)
saveTasks()
render()
}

li.appendChild(del)

list.appendChild(li)

})

document.getElementById("count").innerText="Total Tasks: "+tasks.length
}

function saveTasks(){
localStorage.setItem("tasks",JSON.stringify(tasks))
}

render()