const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const question = document.querySelector("#id-question");
const quoteClass = document.querySelector("#quote")
const todoQuestion = document.querySelector("#todo-question");
const main = document.querySelector("main");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    clock.classList.remove(HIDDEN_CLASSNAME);
    question.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    todoQuestion.classList.remove(HIDDEN_CLASSNAME);
    quoteClass.style.display = "flex";
    main.style.marginTop = "100px";
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    const date = new Date();
    hours = date.getHours();
    let sayGreeting;
    if (6 <= hours && hours < 12) {
        sayGreeting = `Good Morning, ${username}`;
    } else if (12 <= hours && hours < 18) {
        sayGreeting = `Good Afternoon, ${username}`;
    } else if (18 <= hours && hours < 24) {
        sayGreeting = `Good Evening, ${username}`;
    } else if (0 <= hours && hours < 6) {
        sayGreeting = `Good Night, ${username}`;
    }
    greeting.innerText = sayGreeting;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    question.classList.add(HIDDEN_CLASSNAME);
    clock.classList.remove(HIDDEN_CLASSNAME);
    todoQuestion.classList.remove(HIDDEN_CLASSNAME);
    main.style.marginTop = "100px";
    quoteClass.style.display = "flex";
    paintGreetings(savedUsername);
}