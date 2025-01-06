

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const quantityInput = document.querySelector("input");
const boxes = document.querySelector("#boxes");

document.querySelector("#controls").classList.add("task6-controls");
boxes.classList.add("task6-boxes");
quantityInput.classList.add("task6-quantity-input");
createButton.classList.add("task6-create-button");
destroyButton.classList.add("task6-destroy-button");


createButton.addEventListener("click", handleCreateButtonClick);
destroyButton.addEventListener("click", handleDestroyButtonClick);

function handleCreateButtonClick() { 
  const boxesQuantity = Number.parseInt(quantityInput.value);   
  if (1 <= boxesQuantity && boxesQuantity <= 100) {       
    handleDestroyButtonClick();    
    let markup = "";
    for (let i = 0; i <= boxesQuantity-1; i++) {       
      markup += `<div style="width: ${30 + i * 10}px; height: ${30 + i * 10}px;  
        background-color: ${getRandomHexColor()};"></div>`;      
    }    
    boxes.insertAdjacentHTML("afterbegin", markup);
    quantityInput.value = "";
  }    
}

function handleDestroyButtonClick() {
  boxes.innerHTML = "";
 }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
