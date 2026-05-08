let form = document.getElementById("bookAptForm");
form.addEventListener('submit', bookApt);

function bookApt(e){
    e.preventDefault(); //default is to page refresh so this stops it

    let aptType = document.getElementById("aptType").value
    let appointmentDate = document.getElementById("date").value
    let appointmentTime = document.getElementById("time").value


    if(aptType && appointmentDate && appointmentTime){
        const user = {
            service: aptType,
            appointmentDate: appointmentDate,
            appointmentTime: appointmentTime
        }

        fetchData('/appointments/bookAppointment', user, 'POST')
        .then(data => {
            if(!data.message) {
                window.location = "home.html"
            }
        })
        .catch(err => {
            let error = document.getElementById("error");
            error.innerText = err.message;
        })  
    } else{
        console.log("Please fill out all fields.")
    }
}

function cancelApt(e){
    e.preventDefault(); //default is to page refresh so this stops it

    let aptID = document.getElementById("aptID").value

    if(aptID){
        const user = {
            aptID: aptID
        }

        fetchData('/appointments/cancel', user, 'POST')
        .then(data => {
            if(!data.message) {
                window.location = "home.html"
            }
        })
        .catch(err => {
            let error = document.getElementById("error");
            error.innerText = err.message;
        })  
    } else{
        console.log("Please enter an appointment ID.")
    }

}

function updateApt(e){
    e.preventDefault(); //default is to page refresh so this stops it

    let aptID = document.getElementById("aptID").value
    let aptType = document.getElementById("aptType").value
    let appointmentDate = document.getElementById("date").value
    let appointmentTime = document.getElementById("time").value

    if(aptID && aptType && appointmentDate && appointmentTime){
        const user = {
            aptID: aptID,
            aptType: aptType,
            appointmentDate: appointmentDate,
            appointmentTime: appointmentTime
        }

        fetchData('/appointments/update', user, 'POST')
        .then(data => {
            if(!data.message) {
                window.location = "home.html"
            }
        })
        .catch(err => {
            let error = document.getElementById("error");
            error.innerText = err.message;
        })  
    } else{
        console.log("Please fill out all fields.")
    }
}

function getApts(e){
    e.preventDefault(); //default is to page refresh so this stops it

    fetchData('/appointments/getAll', {}, 'GET')
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        let error = document.getElementById("error");
        error.innerText = err.message;
    })
}   

function checkPassword(password){
    return true;
}

async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3500${route}`, {
        method: methodType,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if(response.ok) {
        return await response.json();
    } else {
        throw await response.json();
    }
}