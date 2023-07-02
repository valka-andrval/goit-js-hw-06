const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", inputName);

function inputName(e) {
    if (input.value) {
        span.textContent = input.value;
    } else { span.textContent = "Anonymous"; };
}
