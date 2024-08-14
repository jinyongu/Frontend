const linkIcon = document.querySelector("#links");
const addLinkFrame = document.querySelector("#add-links-frame");
const plusButton = document.querySelector("#add-option .fa-solid.fa-plus");
const addLinks = document.querySelector("#add-links");
const addLinkNav = document.querySelector("#add-option");
const addLinkList = document.querySelector("#links-list");
const creatingLink = document.querySelector("#creating-link");
const addCreateForm = document.querySelector("#add");
const titleForm = document.querySelector("#create-form");
const titleInput = titleForm.querySelector("input");
const linkForm = document.querySelector("#link-address");
const linkInput = linkForm.querySelector("input");
const back = creatingLink.querySelector(".fa-solid.fa-arrow-left")
const addButton = document.querySelector("#add-button button");
const linkItem = document.querySelector(".links-item");

let isProfileOpen = false;
let title;
let link;
let linkNum = 0;

function goToLink(event) {
    const target = event.target.children;
    window.open(target[0].href);
}

function titleSubmit(event) {
    event.preventDefault();
    title = titleInput.value;
    console.log(`title : ${titleInput.value}`);
    console.log(title.length);
    linkInput.focus();
}

function addLink() {
    const li = document.createElement("li");
    li.classList.add("links-item");
    const a = document.createElement("a");
    a.href = `https://${link}`;
    a.target = "_black";
    a.rel = "noopener noreferrer";
    a.innerText = title;
    li.appendChild(a);
    addLinkList.appendChild(li);
    linkNum++;
}

function linkSubmit(event) {
    event.preventDefault();
    link = linkInput.value;
    console.log(`link : ${linkInput.value}`);
    creatingLink.style.display = "none";
    addCreateForm.classList.remove("hidden");
    titleInput.value = "";
    linkInput.value = "";
    addLink();
    backProfile();
}

function backProfile() {
    addLinks.style.height = `${135 + (65*linkNum)}px`;
    addLinkNav.classList.remove("hidden");
    addLinkList.classList.remove("hidden");
    addCreateForm.classList.add("hidden");
    creatingLink.style.display = "none";
}

function otherProfile() {
    console.log("click");

    addLinks.style.height = "300px";
    addLinkNav.classList.add("hidden");
    addLinkList.classList.add("hidden");
    addCreateForm.classList.remove("hidden");
    creatingLink.style.display = "flex";

    titleForm.addEventListener("submit", titleSubmit);
    linkForm.addEventListener("submit", linkSubmit);
    back.addEventListener("click", backProfile);
    addButton.addEventListener("click", linkSubmit);
}

function toggleProfile(event) {
    event.stopPropagation();
    isProfileOpen ? closeProfile() : openProfile();
}

function openProfile() {
    isProfileOpen = true;
    addLinkFrame.classList.remove("hidden");
    addLinkNav.classList.remove("hidden");
    addLinkList.classList.remove("hidden");
    creatingLink.style.display = "none";
    addCreateForm.classList.add("hidden");
    addLinks.style.height = `${135 + (65*linkNum)}px`;

    plusButton.addEventListener("click", otherProfile);
    addLinkList.addEventListener("click", goToLink); 
}

function closeProfile() {
    isProfileOpen = false;
    addLinkFrame.classList.add("hidden");
}

linkIcon.addEventListener('click', toggleProfile);


function handleClickOutside(event) {
    if (isProfileOpen && !addLinkFrame.contains(event.target)) {
        closeProfile();
    }
}

document.addEventListener("click", handleClickOutside);
