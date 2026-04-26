const express = require("express");
const router = express.Router();
const User = require("../models/review");

router.get('/getAllReviews', async (req, res) => {
    try { 
        const reviews = await User.getAllReviews()
        res.send(reviews)
    } catch (error) {
        res.status(401).send({message: error.message});
    }
})

module.exports = router