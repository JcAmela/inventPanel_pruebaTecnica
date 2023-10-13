const express = require('express');
const router = express.Router();
const shipController = require('../controllers/shipController.js');
const Ship = require('../models/ship.js'); 

router.post('/create', shipController.create);

router.get('/ship/:id', async (req, res) => {
    try {
        const ship = await Ship.findByPk(req.params.id);
        if (ship) {
            res.json(ship);
        } else {
            res.status(404).send({ message: "Envío no encontrado." });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/ship/:id', async (req, res) => {
    try {
        const ship = await Ship.findByPk(req.params.id);
        if (ship) {
            const updatedShip = await ship.update(req.body);
            res.json(updatedShip);
        } else {
            res.status(404).send({ message: "Envío no encontrado." });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete('/ship/:id', async (req, res) => {
    try {
        const ship = await Ship.findByPk(req.params.id);
        if (ship) {
            await ship.destroy();
            res.status(204).send();
        } else {
            res.status(404).send({ message: "Envío no encontrado." });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
