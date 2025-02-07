// const endpoint=;
const addTask=document.getElementById('addTask')
const addTaskinput=document.getElementById('addTaskinput')
const taskList=document.getElementById('taskList')


addTask.addEventListener('submit',async(e)=>{
    e.preventDefault()
let task=addTaskinput.value;
if(!task){
    alert('Kindly enter task')
}
else{

    await fetch('http://localhost:8000/task',{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({task:task})
    }).then(res=>res.json()).then(data=> console.log(data))
window.location.reload()
}
})
const getTasks=async()=>{
        // Get request
        await fetch('http://localhost:8000/task',{
            headers:{"content-type":"application/json"}
        }).then(res=>res.json())
        .then(data=>{
           let tsks= data.data
           tsks.map((tsk)=>{
           let listItem=document.createElement('li')
           let text=document.createElement('p')
           let btn=document.createElement('button')
           btn.setAttribute('class','btn btn-danger float-end')
           btn.innerHTML="DELETE"
           text.setAttribute('class','fw-bold p-2')
           listItem.setAttribute('class','list-group-item')
           text.innerHTML=tsk.task;
           taskList.append(listItem)
           listItem.append(text)
           listItem.append(btn)
// DELETE TASK
          btn.addEventListener('click',()=>{
        fetch(`http://localhost:8000/task/${tsk.id}`,{
            method:"DELETE"
        })
        window.location.reload()

          })

           })
        })
}
getTasks()