const express = require("express");
const router = express.Router();
const User = require("../models/stylist");

router.get('/getAllStylists', async (req, res) => {
    try { 
        const stylists = await User.getAllStylists()
        res.send(stylists)
    } catch (error) {
        res.status(401).send({message: error.message});
    }
})

module.exports = router