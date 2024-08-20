const subTodo = document.querySelector("#sub-todo");
const subTodoFrame = document.querySelector("#add-todo-frame");
const addTodoForm = document.querySelector("#sub-todo-form");
const subTodoInput = document.querySelector("#sub-todo-form input");
const subTodoList = document.querySelector("#sub-todo-items");
const addSubTodoFrame = document.querySelector("#add-todo");

let subTodoCheckbox;
let isOpen = false;
let subTodoNum = 0;

function visibleTodo() {
    isOpen = true;
    subTodoFrame.classList.remove("hidden");
}

function hiddenTodo() {
    isOpen = false;
    subTodoFrame.classList.add("hidden");
}

function toggleTodo(event) {
    event.stopPropagation();
    isOpen ? hiddenTodo() : visibleTodo();
}

subTodo.addEventListener("click", toggleTodo);

function ClickOutside(event) {
    if (isOpen && !subTodoFrame.contains(event.target)) {
        hiddenTodo();
    }
}

document.addEventListener("click", ClickOutside);

function submitSubTodo(event) {
    event.preventDefault();
    const subTodo = subTodoInput.value;
    subTodoInput.value = "";
    addSubTodo(subTodo);

    console.log(subTodo);

}

function addSubTodo(item) {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const span = document.createElement("span");
    span.innerText = item;
    li.appendChild(checkbox);
    li.appendChild(span);
    subTodoNum++;
    addSubTodoFrame.style.height = `${115 + (26 * subTodoNum)}px`;
    subTodoList.appendChild(li);

}

addTodoForm.addEventListener("submit", submitSubTodo);

function checkTodo(event) {
    const target = event.target.nextSibling;
    console.log(target);
}