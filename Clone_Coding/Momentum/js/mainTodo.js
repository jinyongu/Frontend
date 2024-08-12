const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const mainTodoH2 = document.querySelector("#todo-question h2");
const mainTodoFrame = document.querySelector("#main-todo");
const mainTodoText = document.querySelector("#main-todo h3"); 
const todoCheckbox = document.querySelector("#todo-check");
const deleteButton = document.querySelector("#main-todo button");

const TODO_KEY = "todo";

function handleToDoSubmit(event) {
    event.preventDefault();
    const mainTodo = toDoInput.value;
    toDoInput.value = "";
    localStorage.setItem(TODO_KEY, mainTodo);
    paintTodo(mainTodo);
}

function paintTodo(mainTodo) {
    toDoInput.classList.add(HIDDEN_CLASSNAME);
    mainTodoH2.innerText = "Today";
    mainTodoText.innerText = mainTodo;
    mainTodoFrame.style.display = "flex";
}

function paintTextLine() {
    const is_checked = todoCheckbox.checked;

    if (is_checked) {
        mainTodoText.style.textDecoration = "line-through";
    } else {
        mainTodoText.style.textDecoration = "none";
    }
}

function deleteTodo() {
    localStorage.removeItem(TODO_KEY);
    mainTodoFrame.style.display = "none";
    toDoInput.classList.remove(HIDDEN_CLASSNAME);
    mainTodoH2.innerText = "What is your main focus for Today?";
}



const savedTodo = localStorage.getItem(TODO_KEY);

if (savedTodo === null) {
    toDoForm.addEventListener("submit", handleToDoSubmit);
} else {
    toDoInput.classList.add(HIDDEN_CLASSNAME);
    paintTodo(savedTodo);
}

todoCheckbox.addEventListener("change", paintTextLine);

deleteButton.addEventListener("click", deleteTodo);