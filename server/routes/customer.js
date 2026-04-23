const express = require("express");
const router = express.Router();
const User = require("../models/customer");

router.get('/getAllCustomers', async (req, res) => {
    try { 
        const customers = await User.getAllCustomers()
        res.send(customers)
    } catch (error) {
        res.status(401).send({message: error.message});
    }
})

module.exports = router