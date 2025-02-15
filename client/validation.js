const form = document.getElementById("form")
const firstname_input = document.getElementById("firstname-input")
const email_input = document.getElementById("email-input")
const password_input = document.getElementById("password-input")
const repeat_password_input = document.getElementById("repeat-password-input")
const error_message = document.getElementById("error-message")

form.addEventListener("submit", (e) => {
    let errors = []

    if(firstname_input){
        //if there's a firstname input -> sign-up html
        errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value)
    }
    else{
        //if we don't have a firstname input -> login html
        errors = getLoginFormErrors(email_input.value, password_input.value)
    }

    if(errors.length > 0){
        //if there are any errors
        e.preventDefault()
        error_message.innerText = errors.join(". ")
        //shows error message seperated by .[space]
    }
})

function getSignupFormErrors(firstname, email, password, repeatPassword){
    let errors = []

    if(firstname === "" || firstname == null ){
        //no input in firstname
        errors.push("Firstname is required")
    }

    if(email === "" || email == null ){
        //no input in firstname
        errors.push("Email is required")
    }

    if(password === "" || password == null ){
        //no input in firstname
        errors.push("Password is required")
    }

    if(password!== repeatPassword){
        errors.push("Password does not match repeated password")
    }
    return errors;
}

function getLoginFormErrors(email, password){
    let errors = []

    if(email === '' || email == null){
        errors.push('Email is required')
    }
    if(password === '' || password == null){
        errors.push('Password is required')
    }
    return errors;
}
