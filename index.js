require('dotenv').config();
const express = require("express")
const app = express()

app.use(express.json())

const userRoutes = require("./server/routes/user")

// CORS middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
}) 
app.use("/users", userRoutes)
const appointmentRoutes = require("./server/routes/appointment")
app.use("/appointments", appointmentRoutes)


//instead of having a domain name, 

const PORT = process.env.PORT || 3500

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`))