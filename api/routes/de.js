const express = require('express');
const router = express.Router();
const deModel = require("../models/de");


router.get('/', (req, res) => {
    deModel.find()
        .then(des => {
            res.status(200).json(des);
        })
        .catch(() => {
            res.status(422).json({message: 'rpds not found'});
        });
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    if (!id)
        return res.status(422).send({message: 'id cannot be null'});
    try {
        const de = await deModel.findOne({_id: id});
        if (!de) {
            res.status(422).json({message: 'rpd not found'});
            return;
        }
        res.status(200).json(de);
    } catch (err) {
        res.status(422).json({message: 'rpd not found'});
    }
});

router.post('/', async (req, res) => {
    const {data, hora, emocao} = req.body;
    if (!data)
        return res.status(422).send({error: 'data cannot be null'});
    if (!hora)
        return res.status(422).send({error: 'situacao cannot be null'});
    if (!emocao)
        return res.status(422).send({error: 'pensamento cannot be null'});

    const de = {
        data,
        hora,
        emocao
    };
    try {
        await deModel.create(rpd);
        res.status(201).json({message: 'rpd created'});
    } catch (err) {
        return res.status(442).send({error: 'Registration failed'});
    }
});

router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const {data, hora, emocao} = req.body;
    const de = {
        data,
        hora,
        emocao
    };
    try {
        const updatedrpd = await deModel.updateOne({_id: id}, de);
        res.status(200).json(updatedrpd);
    } catch (err) {
        res.status(422).json({message: 'rpd not found'});
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    if (!id)
        return res.status(422).send({message: 'id cannot be null'});
    try {
        deModel.delete({_id: id});
    } catch (err) {
        res.status(422).json({message: 'rpd not found'});
    }
});

module.exports = router;