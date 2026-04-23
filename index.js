require('dotenv').config();
const express = require("express")
const app = express()

app.use(express.json())

const customerRoutes = require("./server/routes/customer")
app.use("/customers", customerRoutes)
const stylistRoutes = require("./server/routes/stylist")
app.use("/stylists", stylistRoutes)

//instead of having a domain name, 

const PORT = process.env.PORT || 3500

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`))