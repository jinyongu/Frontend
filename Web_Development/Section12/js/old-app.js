console.dir(document);

// document.body.children[1].children[0].href = "https://google.com";

// alert();
// window.alert();

let anchorElement =  document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("p a");
anchorElement.href = "https://naver.com";

// ADD AN ELEMENT
// 1. Create the new element
let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This leads to Google";

// 2. Get access to the parent element that should hold the new 
let firstParagraph = document.querySelector("#my-info");

// 3. Insert the new element into the parent element content
firstParagraph.append(newAnchorElement);

// REMOVE ELEMENTS
// 1. Select the element that should be removed
let firstH1Element = document.querySelector('h1');

// 2. Remove it!
// firstH1Element.remove();
firstH1Element.parentElement.removeChild(firstH1Element); // for older browser

// MOVE ELEMENTS
firstParagraph.parentElement.append(firstParagraph);

// innerHTML
console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML = 'Hi! This is <strong>important!</strong>';