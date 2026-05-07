const navbar = document.querySelector("navbar");
if(getCurrentUser()) {
    navbar.innerHTML = `
    <ul class ="nav-links">
                <li><a href="home.html">Home</a></li>
                <li><a id="logout">Log Out</a></li>
                <li><a href="bookApt.html"> Book Appointment </a></li>
    </ul>
    `
} else {
    navbar.innerHTML = `
    <ul class ="nav-links">
                <li><a href="home.html">Home</a></li>
                <li><a href="register.html">Sign Up</a></li>
                <li><a href="login.html">Log In</a></li>
    </ul>
    `
}