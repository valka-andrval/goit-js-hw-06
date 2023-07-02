function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");
let index = 0

createBtn.addEventListener("click", function () {
  createBoxes(parseInt(input.value));
  
});
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const boxDivs = [];
 
  for (let i = 1; i <= amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + (i + index) * 10}px`;
    box.style.height = `${30 + (i + index) * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.textContent = index + i;
    boxDivs.push(box);
  }
  index += amount
  boxes.append(...boxDivs);
}

function destroyBoxes() {
  index = 0
  boxes.innerHTML = "";
}