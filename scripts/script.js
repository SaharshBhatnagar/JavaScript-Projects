const inputField = document.querySelector('.Todo-input');
const addButton = document.querySelector('.todo-add');
const todoList = document.querySelector('.todos-container');

addButton.addEventListener('click', addTodo);

let TodoNumber = 1;

function addTodo() {
    const TodoInput = inputField.value;

    if(TodoInput === "") {
        return;
    }

    const newTodosHTML = `
        <div class="display-todo">
            <div class="todos-grp">
                <span class="todos-number">${TodoNumber}.</span>
                <p class="todos-task">${TodoInput}</p>
            </div>
            <div class="todos-btn-grp">
                <button class="todo-edit">Edit</button>
                <button class="todo-delete">Delete</button>
            </div>
        </div>
                `;

    todoList.insertAdjacentHTML('beforeend', newTodosHTML);

    TodoNumber += 1;

    inputField.value = "";
};

todoList.addEventListener('click', checkDeleteEdit);

function checkDeleteEdit(event) {
    const item = event.target;

    if (item.classList[0] === 'todo-delete') {
        const todo = item.closest('.display-todo');
        todo.remove();
    }
    else if (item.classList[0] === 'todo-edit') {
        const todoWrapper = item.closest('.display-todo');
        const todoTextElement = todoWrapper.querySelector('.todos-task')
        if (item.innerText === "Edit") {
            todoTextElement.contentEditable = true;
            todoTextElement.style.outline = "none";
            todoTextElement.style.backgroundColor ="aliceblue";
            todoTextElement.style.border = "2px solid dodgerblue";
            todoTextElement.focus();
            item.innerText = "Save";
        } else {
            todoTextElement.contentEditable = false;
            todoTextElement.style.backgroundColor = "";
            todoTextElement.style.border = "none";
            item.innerText = "Edit"
        }
    }
}