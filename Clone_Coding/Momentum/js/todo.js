const subTodo = document.querySelector("#sub-todo");
const subTodoFrame = document.querySelector("#add-todo-frame");
const addTodoForm = document.querySelector("#sub-todo-form");
const subTodoInput = document.querySelector("#sub-todo-form input");
const subTodoList = document.querySelector("#sub-todo-items");
const addSubTodoFrame = document.querySelector("#add-todo");

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
    if (isOpen && event.target.innerText !== "X" && !subTodoFrame.contains(event.target)) {
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
    checkbox.addEventListener("change", checkTodo);
    const span = document.createElement("span");
    span.innerText = item;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.addEventListener("click", deleteSubTodo);
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    subTodoNum++;
    addSubTodoFrame.style.height = `${115 + (26 * subTodoNum)}px`;
    subTodoList.appendChild(li);
}

addTodoForm.addEventListener("submit", submitSubTodo);

function checkTodo(event) {
    const target = event.target;
    const is_checked = target.checked;
    const subTodoItem = target.nextSibling;

    if (is_checked) {
        subTodoItem.style.textDecoration = "line-through";
        subTodoItem.style.color = "rgb(192, 192, 192)";
    } else {
        subTodoItem.style.textDecoration = "none";
        subTodoItem.style.color = "rgb(239, 239, 239)";
    }
}

function deleteSubTodo(event) {
    const targetItem = event.target.parentElement;
    targetItem.remove();
    subTodoNum--;
    addSubTodoFrame.style.height = `${115 + (26 * subTodoNum)}px`;
    console.log(targetItem);
}