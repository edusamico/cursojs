let addToDo = document.getElementById('addToDo');
let toDoList = document.getElementById('toDoList');
let inputField = document.getElementById('inputField');

addToDo.addEventListener('click', function(){
    let task = document.createElement('p');

    task.classList.add('toDo');
    task.innerText = inputField.value;
    toDoList.appendChild(task);
    inputField.value = "";
    task.addEventListener('click', function(){
        task.style.backgroundColor = "#1c1";
        task.style.textDecoration = "line-through";
        task.style.textDecorationColor = "red";
        
    })
    task.addEventListener('dblclick', function(){
        toDoList.removeChild(task);
    })
})