const express = require('express');
const monitoreoService = require('../services/monitoreoService');

const router = express.Router();

router.get('/conexiones-activas', async (req, res) => {
    try {
        const data = await monitoreoService.obtenerConexionesActivas();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener conexiones activas', error: error.message });
    }
});

router.get('/intentos-fallidos', async (req, res) => {
    try {
        const data = await monitoreoService.obtenerIntentosFallidos();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener intentos fallidos', error: error.message });
    }
});

router.get('/estado-dispositivos', async (req, res) => {
    try {
        const data = await monitoreoService.obtenerEstadoDispositivos();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener estado de los dispositivos', error: error.message });
    }
});

module.exports = router;
