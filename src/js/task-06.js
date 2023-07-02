const input = document.querySelector("#validation-input");

input.addEventListener("blur", changeColor);

function changeColor() {
    const inputLength = parseInt(input.dataset.length);
    
    if (input.value.length === inputLength) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
}