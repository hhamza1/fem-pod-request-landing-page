let email = document.querySelector("#email");
const errorMsg = document.querySelector("#error");
const form = document.querySelector("form");

let emailValidity = email.validity;

let emailValidation = (input, validator) => {
    if(!validator.valid || input.value === ""){
        errorMsg.classList.add("display-error");
    }
    else {
        errorMsg.classList.remove("display-error");
    }
}

form.addEventListener("submit", e =>{
    e.preventDefault();
    console.log(e.target.value);
    emailValidation(email, emailValidity);
})

