const widget = document.querySelector(".widget");
const changeColorButton = document.querySelector(".change-color");

widget.classList.add("task5-widget");
widget.querySelector("p").classList.add("task5-p");
widget.querySelector(".color").classList.add("task5-color");
changeColorButton.classList.add("task5-button");

changeColorButton.addEventListener("click", handleChangeColorButtonClick);

function handleChangeColorButtonClick(event) {
  const newBackgroundColor = getRandomHexColor();  
  document.querySelector("body").style.backgroundColor = newBackgroundColor;
  widget.querySelector(".color").textContent = newBackgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
