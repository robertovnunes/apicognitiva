const express = require('express');
const User = require("../models/user");
const router = express.Router();


router.get('/', (req, res) => {
    User.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(() => {
            res.status(422).json({message: 'Users not found'});
        });
});

router.get('/:username', async (req, res) => {
    const username = req.params.username;
    if (!username)
        return res.status(422).send({message: 'Username cannot be null'});
    try {
        const user = await User.findOne({username: username});
        if (!user) {
            res.status(422).json({message: 'User not found'});
            return;
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(422).json({message: 'User not found'});
    }
});

router.post('/', async (req, res) => {
    const {name, username, email, password} = req.body;

    if (!name)
        return res.status(422).send({error: 'Name cannot be null'});
    if (!username)
        return res.status(422).send({error: 'Username cannot be null'});
    if (!email)
        return res.status(422).send({error: 'Email cannot be null'});
    if (!password)
        return res.status(422).send({error: 'Password cannot be null'});

    const user = {
        name,
        username,
        email,
        password,
    }
    try {
        await User.create(user);
        res.status(201).json({message: 'User created'});
    } catch (err) {
        return res.status(442).send({error: 'Registration failed'});
    }
});

router.patch('/:username', async (req, res) => {
   const userName = req.params.username;
    const {name, username, email, password} = req.body;
    const user = {
        name,
        username,
        email,
        password
    }
    try {
        const updatedUser = await User.updateOne({username: userName}, user);
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(422).json({message: 'User not found'});
    }
});

router.delete('/:username', async (req, res) => {
    const username = req.params.username;
    if (!username)
        return res.status(422).send({message: 'Username cannot be null'});
    try {
        User.delete({username: username});
    } catch (err) {
        res.status(422).json({message: 'User not found'});
    }
});

module.exports = router;