const inputElement = document.querySelector('#product-name');
const inputLength = document.querySelector("#remaining-chars");

const maxChars = inputElement.maxLength;

function updateRemainingCharacters() {
    const textLength = inputElement.value.length;
    const remainChars = maxChars - textLength;

    if (remainChars <= 10) {
        inputElement.classList.add('warning');
        inputLength.classList.add('warning');
    } else {
        inputElement.classList.remove('warning');
        inputLength.classList.remove('warning');
    }

    inputLength.innerText = `${remainChars}`;
}


inputElement.addEventListener('input', updateRemainingCharacters);