const express = require('express');
const router = express.Router();
const rpdModel = require("../models/rpd");



router.get('/', (req, res) => {
    rpdModel.find()
        .then(rpds => {
            res.status(200).json(rpds);
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
        const rpd = await rpdModel.findOne({_id: id});
        if (!rpd) {
            res.status(422).json({message: 'rpd not found'});
            return;
        }
        res.status(200).json(rpd);
    } catch (err) {
        res.status(422).json({message: 'rpd not found'});
    }
});

router.post('/', async (req, res) => {
    const {data, situacao, pensamento, emocaosentimento, comportamento} = req.body;

    if (!data)
        return res.status(422).send({error: 'data cannot be null'});
    if (!situacao)
        return res.status(422).send({error: 'situacao cannot be null'});
    if (!pensamento)
        return res.status(422).send({error: 'pensamento cannot be null'});
    if (!emocaosentimento)
        return res.status(422).send({error: 'emocao/sentimento cannot be null'});
    if (!comportamento)
        return res.status(422).send({error: 'comportamento cannot be null'});

    const rpd = {
        data,
        situacao,
        pensamento,
        emocaosentimento,
        comportamento
    };
    try {
        await rpdModel.create(rpd);
        res.status(201).json({message: 'rpd created'});
    } catch (err) {
        return res.status(442).send({error: 'Registration failed'});
    }
});

router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const {data, situacao, pensamento, emocaosentimento, comportamento} = req.body;
    const rpd = {
        data,
        situacao,
        pensamento,
        emocaosentimento,
        comportamento
    };
    try {
        const updatedrpd = await rpdModel.updateOne({_id: id}, rpd);
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
        rpdModel.delete({_id: id});
    } catch (err) {
        res.status(422).json({message: 'rpd not found'});
    }
});

module.exports = router;