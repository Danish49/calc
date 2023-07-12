// Dom elements
const allButtons = document.querySelectorAll(".btn");
const equalButton = document.querySelector(".equal");
const acButton = document.querySelector(".reset");
const deletebutton = document.querySelector(".delete");
const formInput = document.querySelector("#textInput");
window.addEventListener("DOMContentLoaded", function () {
  formInput.focus();
});

allButtons.forEach((button) => {
  button.addEventListener("click", handelClick);
});

function handelClick(evt) {
  const buttonValue = evt.target.textContent;
  formInput.value += buttonValue;
}

equalButton.addEventListener("click", calculate);

function calculate() {
  const expression = formInput.value;
  const result = eval(expression);
  formInput.value = result;
}

acButton.addEventListener("click", clearDisplay);

function clearDisplay() {
  formInput.value = "";
}

deletebutton.addEventListener("click", deleteLastCharacter);

function deleteLastCharacter() {
  formInput.value = formInput.value.slice(0, -1);
}

document.querySelector(".theme").addEventListener("click" , ()=>{
    document.querySelector(".messege").textContent = "New themes coming in Version 2.0"
    
})
