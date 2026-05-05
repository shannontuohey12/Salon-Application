const express = require("express");
const router = express.Router();
const User = require("../models/appointment");

router
.get('/getAllAppointments', async (req, res) => {
    try { 
        const appointments = await User.getAllAppointments()
        res.send(appointments)
    } catch (error) {
        res.status(401).send({message: error.message});
    }
})

.post('/bookAppointment', async (req, res) => {
    try {
        await User.bookAppointment(req.body);
        res.send({message: "Appointment booked successfully"});
    } catch (error) {
        res.status(401).send({message: error.message});
    }
})

.delete('/cancelAppointment', async (req, res) => {
    try {
        await User.cancelAppointment(req.body.appointmentID);
        res.send({message: "Appointment cancelled successfully"});
    } catch (error) {
        res.status(401).send({message: error.message});
    }
})

.put('/updateAppointment', async (req, res) => {
    try {
        await User.updateAppointment(req.body);
        res.send({message: "Appointment updated successfully"});
    } catch (error) {
        res.status(401).send({message: error.message});
    }
})

module.exports = router