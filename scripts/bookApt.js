let form = document.getElementById("bookAptForm");
form.addEventListener('submit', bookApt);

function bookApt(e){
    e.preventDefault(); //default is to page refresh so this stops it

    let aptType = document.getElementById("aptType").value
    let date = document.getElementById("date").value
    let time = document.getElementById("time").value


    if(aptType && date && time){
        const user = {
            aptType: aptType,
            date: date,
            time: time
        }

        console.log(user)
    } else{
        console.log("Please fill out all fields.")
    }
}

function checkPassword(password){
    return true;
}