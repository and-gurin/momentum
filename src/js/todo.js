const todoIcon = document.querySelector('.icon-todo');
const todoBlock = document.querySelector('.todo')
const todoInput = document.querySelector('.input-group__input');
const todoButton = document.querySelector('.input-group__button');
const todoContainer = document.querySelector('.todo-container');

let isOpen = false;
let todoList = [];

if (localStorage.getItem('todo-task')) {
    todoList = JSON.parse(localStorage.getItem('todo-task'));
    todoList.map(item=>{createTask(item)})
}

export const openCloseTodo = () => {
    todoIcon.addEventListener('click', ()=>{
    todoBlock.style.transform = isOpen? `translateX(120%)`: `translateX(0%)`
    isOpen = !isOpen
    })
}

export const setUpEventListenersForTodo = () => {
    todoButton.addEventListener('click', addNewTask);
    todoContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('icon-delete')||event.target.parentElement.classList.contains('icon-delete')) {
        const taskId = event.target.closest('li').id;
        deleteTask(taskId)
    }
    })
    todoContainer.addEventListener('change', (event)=> {
        const taskId =  event.target.closest('li').id;
        changeTaskStatus(taskId, event.target)
    })
};

function addNewTask () {
    if (todoInput.value !== '') {
        let task = {
        id: new Date().getTime(),
        name: todoInput.value,
        isDone: false
        }
        todoList.push(task)
        localStorage.setItem('todo-task', JSON.stringify(todoList));
        createTask(task);
        todoInput.value = '';
    }
}

function createTask (data) {
    const li = document.createElement('li');
    li.setAttribute('id', data.id)
    const liMarkup = `
    <div class="checkbox-group">
    <input type="checkbox" class="checkbox-group__input"
    ${data.isDone ? "checked" : ""}>
    <span>${data.name}</span>
    <span class="icon icon-delete"></span> 
    </div>` 
    li.innerHTML = liMarkup;
    todoContainer.appendChild(li);
}

function deleteTask (taskId) {
    let tasks = todoList.filter((item)=>item.id !== parseInt(taskId, 10));
    document.getElementById(taskId).remove();
    localStorage.setItem('todo-task', JSON.stringify(tasks));
    todoList = tasks;
}

function changeTaskStatus (taskId, taskCheckBox) {
    let task = todoList.find(item=>item.id === parseInt(taskId, 10));
    task.isDone = !task.isDone
    if (task.isDone) {
        taskCheckBox.setAttribute('checked', '');
        taskCheckBox.nextElementSibling.classList.add('checked');
    } else {
        taskCheckBox.removeAttribute('checked');
        taskCheckBox.nextElementSibling.classList.remove('checked')
    }
}