const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");


if(loginForm) {
    loginForm.addEventListener('submit', login);
}
if(registerForm) {
    registerForm.addEventListener('submit', register);
}



function login(e){
    e.preventDefault(); //default is to page refresh so this stops it

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    if(checkPassword(password)){
        const user = {
            email: email,
            password: password
        }

        //fetch call for POST (login)
        fetchData('/users/login', user, 'POST')
        .then(data => {
            if(!data.message) {
                setCurrentUser(data);
                window.location = "bookApt.html"
            }
        })
        .catch(err => {
            let error = document.getElementById("error");
            error.innerText = err.message;
            document.getElementById("passwd").value = "";
        })
    } else{
        console.log("Please enter a better password...")
    }
}
function register(e){
    e.preventDefault(); //default is to page refresh so this stops it

    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    if(checkPassword(password)){
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        }

        //fetch call for POST (register)
        fetchData('/users/register', user, 'POST')
        .then(data => {
            if(!data.message) {
                setCurrentUser(data);
                window.location = "bookApt.html"
            }
        })
        .catch(err => {
            let error = document.getElementById("error");
            error.innerText = err.message;
            document.getElementById("passwd").value = "";
        })
    } else{
        console.log("Please enter a better password...")
    }

   
}

function updateUser(e){
    e.preventDefault(); //default is to page refresh so this stops it

    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let email = document.getElementById("email").value
    let password = document.getElementById("passwd").value
    if(checkPassword(password)){
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }

        //fetch call for PUT (update user)
        fetchData('/users/updateUser', user, 'PUT')
        .then(data => {
            if(!data.message) {
                window.location = "bookApt.html"
            }
        })
        .catch(err => {
            let error = document.getElementById("error");
            error.innerText = err.message;
            document.getElementById("passwd").value = "";
        })
    } else{
        console.log("Please enter a better password...")
    }
}   

function getAllUsers() {
    //fetch call for GET (get all users)
    fetchData('/users/getallUsers', {}, 'GET')
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err.message);
    })
}

function checkPassword(password){
    return true;
}

 function setCurrentUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

export function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
}

function removeCurrentUser() {
    localStorage.removeItem('user');
}
//fetchData function: use for POST, GET, PUT, DELETE requests
async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3500${route}`, {
        method: methodType,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    if(response.ok) {
        return result
    } else {
        throw new Error(result.message || "Request failed");
    }
}
