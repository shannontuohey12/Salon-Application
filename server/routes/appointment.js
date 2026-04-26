const express = require("express");
const router = express.Router();
const User = require("../models/appointment");

router.get('/getAllAppointments', async (req, res) => {
    try { 
        const appointments = await User.getAllAppointments()
        res.send(appointments)
    } catch (error) {
        res.status(401).send({message: error.message});
    }
})

module.exports = router