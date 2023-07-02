const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
    
  if (email.value === "" || password.value === "") {
    return window.alert("Всі поля повинні бути заповнені!");
  }
    const inputValue = { [email.name]: email.value, [password.name]: password.value }

    console.log(inputValue);
  event.currentTarget.reset();
};
