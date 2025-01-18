const express = require('express');
const deviceService = require('../services/deviceService');

const router = express.Router();

router.get('/:macAddress', async (req, res) => {
    try {
        const deviceDetails = await deviceService.getDeviceDetails(req.params.macAddress);
        res.json(deviceDetails);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener detalles del dispositivo', error: error.message });
    }
});

module.exports = router;
