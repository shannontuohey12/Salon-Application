let form = document.getElementById("loginForm");
form.addEventListener('submit', login);

function login(e){
    e.preventDefault(); //default is to page refresh so this stops it

    let email = document.getElementById("email").value
    let password = document.getElementById("passwd").value
    if(checkPassword(password)){
        const user = {
            email: email,
            password: password
        }

        console.log(user)
    } else{
        console.log("Please enter a better password...")
    }
}

function checkPassword(password){
    return true;
}