const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get('/getAllUsers', async (req, res) => {
    try { 
        const users = await User.getAllUsers()
        res.send(users)
    } catch (error) {
        res.status(401).send({message: error.message});
    }
})

module.exports = router