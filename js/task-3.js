const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.classList.add("task3-name-input");
nameOutput.classList.add("task3-name-output");
document.querySelector("h1").classList.add("task3-name-output");

nameInput.addEventListener("input", nameInputHandler);

function nameInputHandler(event) { 
    event.preventDefault();    
    nameOutput.textContent = event.currentTarget.value.trim();
}
