const inputField = document.querySelector('.Todo-input');
const addButton = document.querySelector('.todo-add');
const todoList = document.querySelector('.todos-container');

addButton.addEventListener('click', addTodo);

inputField.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        addTodo();
    }
});


function addTodo() {
    const TodoInput = inputField.value;

    if(TodoInput === "") {
        return;
    }

    const newTodosHTML = `
        <div class="display-todo">
            <div class="todos-grp">
                <span class="todos-number">1.</span>
                <p class="todos-task">${TodoInput}</p>
            </div>
            <div class="todos-btn-grp">
                <input type="checkbox" class="todo-complete" name="complete" value="todocomplete">
                <button class="todo-edit">Edit</button>
                <button class="todo-delete">Delete</button>
            </div>
        </div>
                `;

    todoList.insertAdjacentHTML('beforeend', newTodosHTML);

    inputField.value = "";

    rememberTasksNum();
    saveData();
};

todoList.addEventListener('click', checkDeleteEdit);

todoList.addEventListener('keydown', function saveOnEnter(event) {
    if (event.key === "Enter") {
        if (event.target.classList.contains('todos-task')) {
            event.preventDefault();
            event.target.closest('.display-todo').querySelector('.todo-edit').click();
        }
    }
});

function checkDeleteEdit(event) {

    const item = event.target;

    if (item.classList[0] === 'todo-delete') {

        const todo = item.closest('.display-todo');

        todo.remove();
        rememberTasksNum();
        saveData();
    }

    else if (item.classList[0] === 'todo-edit') {

        const todoWrapper = item.closest('.display-todo');
        const todoTextElement = todoWrapper.querySelector('.todos-task');


        if (item.innerText === "Edit") {
            todoTextElement.contentEditable = true;
            todoTextElement.style.outline = "none";

            todoTextElement.style.backgroundColor ="aliceblue";
            todoTextElement.style.border = "2px solid dodgerblue";

            todoTextElement.focus();
            item.innerText = "Save";

        } else {
            todoTextElement.contentEditable = false;

            saveData();

            todoTextElement.style.backgroundColor = "";

            todoTextElement.style.border = "none";
            item.innerText = "Edit"
        }
    } else if (item.classList[0] === 'todo-complete') {
        const todoWrapper = item.closest('.display-todo');
        const todoTextElement = todoWrapper.querySelector('.todos-task');
        
        if (item.checked) {
        todoTextElement.style.textDecoration = "line-through";
        todoTextElement.style.opacity = "0.6";
        } else {
        todoTextElement.style.textDecoration = "none";
        todoTextElement.style.opacity = "1";
        }

        saveData();

    }
};

function saveData() {
    localStorage.setItem("myTodos", todoList.innerHTML);
};

function showTask() {
    const savedData = localStorage.getItem("myTodos");
    if (savedData) {
        todoList.innerHTML = savedData;
        rememberTasksNum();
    }
};

showTask();

function rememberTasksNum() {

    const allNumbers = document.querySelectorAll('.todos-number');

    allNumbers.forEach((codeHTML, index) => {
        codeHTML.innerText = `${index + 1}.`;
    })
};