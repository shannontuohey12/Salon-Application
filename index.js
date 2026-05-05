require('dotenv').config();
const express = require("express")
const app = express()

app.use(express.json())

const customerRoutes = require("./server/routes/user")
app.use("/customers", customerRoutes)
const stylistRoutes = require("./server/routes/stylist")
app.use("/stylists", stylistRoutes)
const appointmentRoutes = require("./server/routes/appointment")
app.use("/appointments", appointmentRoutes)
const reviewRoutes = require("./server/routes/review")
app.use("/reviews", reviewRoutes)

//instead of having a domain name, 

const PORT = process.env.PORT || 3500

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`))