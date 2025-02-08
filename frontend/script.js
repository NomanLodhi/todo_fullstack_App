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
           let updateForm=document.createElement('form')
           let updateField=document.createElement('input')
           let btnPatch=document.createElement('button')
           let btnUpdate=document.createElement('button')
           btn.setAttribute('class','btn btn-danger float-end')
           btnUpdate.setAttribute('class','btn btn-primary float-end mx-3')
           updateForm.setAttribute('class','my-3')
           updateField.setAttribute('class','form-control me-3')
           btnPatch.setAttribute('class','btn btn-warning mx-3')
           btn.innerHTML="DELETE"
           btnPatch.innerHTML="Add"
           btnUpdate.innerHTML="UPDATE"
           text.setAttribute('class','fw-bold p-2')
           listItem.setAttribute('class','list-group-item')
           text.innerHTML=tsk.task;
           taskList.append(listItem)
           listItem.append(text)
           listItem.append(updateForm)
           updateForm.append(updateField)
           updateForm.append(btnPatch)
           listItem.append(btn)
           listItem.append(btnUpdate)
           updateForm.style.display='none'
           
// DELETE TASK
          btn.addEventListener('click',()=>{
        fetch(`http://localhost:8000/task/${tsk.id}`,{
            method:"DELETE"
        })
        window.location.reload()

          })
        btnUpdate.addEventListener('click',()=>{
            updateField.value=tsk.task
            text.style.display='none'
            updateForm.style.display='flex'
        })
        updateForm.addEventListener('submit',async(e)=>{
            e.preventDefault();
            let taskUpdate=updateField.value;
            
          await fetch(`http://localhost:8000/task/${tsk.id}`,{
            method:'PATCH',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({task:taskUpdate})
          })
        window.location.reload()
        })
           })
        })
}
getTasks()