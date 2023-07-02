const btnDecrement = document.querySelector(`[data-action="decrement"]`);
const btnIncrement = document.querySelector(`[data-action="increment"]`);
const span = document.querySelector("#value");

let counterValue = 0;
const decrement = () => {
    span.textContent = counterValue -= 1;
};
const increment = () => {
    span.textContent = counterValue += 1;
}

btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);


