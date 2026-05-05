const express = require("express");
const router = express.Router();
const User = require("../models/user");

router
.get('/getallUsers', async (req, res) => {
    try { 
        const users = await User.getAllUsers()
        res.send(users)
    } catch (error) {
        res.status(401).send({message: error.message});
    }
})

.post('/login', async (req, res) => {
    try {
        const user = await User.login(req.body);
        res.send({...user, password: undefined});
    } catch (error) {
        res.status(401).send({message: error.message});
    }
})

.post('/register', async (req, res) => {
    try {
        const user = await User.register(req.body);
        res.send({...user, password: undefined});
    } catch (error) {
        res.status(401).send({message: error.message});
    }
})

.put('/updateUser', async (req, res) => {
    try {
        await User.updateUser(req.body);
        res.send({message: "User updated successfully"});
    } catch (error) {
        res.status(401).send({message: error.message});
    }
})
module.exports = router