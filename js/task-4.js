const loginForm = document.querySelector(".login-form");
const loginFormEmail = loginForm.elements.email;
const loginFormPassword = loginForm.elements.password;

loginForm.classList.add("task4-form");
loginForm.querySelectorAll("label").forEach(label => {
    label.classList.add("task4-label");
});
loginFormEmail.classList.add("task4-input");
loginFormPassword.classList.add("task4-input");
loginForm.querySelector("button").classList.add("task4-button");
loginForm.querySelector("button").textContent = "Log in";

loginFormEmail.setAttribute("type", "text");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) { 
    event.preventDefault();
    const email = loginFormEmail.value.trim();
    const password = loginFormPassword.value.trim();
    const result = {        
    };
    if (email && password) { 
        result[loginFormEmail.name] = email;
        result[loginFormPassword.name] = password;
        console.log(result);
        loginForm.reset();
    } else { 
        alert("All form fields must be filled in");
    }
}