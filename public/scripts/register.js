let form = document.getElementById("registerForm");
form.addEventListener('submit', register);

function register(e){
    e.preventDefault(); //default is to page refresh so this stops it

    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let bday = document.getElementById("bday").value

    if(checkPassword(password)){
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            bday: bday
        }

        console.log(user)
    } else{
        console.log("Please enter a better password...")
    }
}

function checkPassword(password){
    return true;
}