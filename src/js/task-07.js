const inputElem = document.getElementById("font-size-control");
const textElem = document.getElementById("text");

inputElem.addEventListener("input", changeTextSize);

function changeTextSize() {
  textElem.style.fontSize = inputElem.value + "px";
}