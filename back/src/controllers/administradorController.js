const express = require('express');
const administradorService = require('../services/administradorService');

const router = express.Router();

// Obtener todos los administradores
router.get('/', async (req, res) => {
    try {
        const administradores = await administradorService.getAllAdministradores();
        res.json(administradores);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener administradores', error: error.message });
    }
});

// Obtener un administrador por ID
router.get('/:id', async (req, res) => {
    try {
        const administrador = await administradorService.getAdministradorById(req.params.id);
        if (administrador) {
            res.json(administrador);
        } else {
            res.status(404).json({ message: 'Administrador no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar el administrador', error: error.message });
    }
});

// Crear un nuevo administrador
router.post('/', async (req, res) => {
    try {
        const newAdministrador = await administradorService.createAdministrador(req.body);
        res.status(201).json(newAdministrador);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el administrador', error: error.message });
    }
});

// Actualizar un administrador por ID
router.put('/:id', async (req, res) => {
    try {
        const updatedAdministrador = await administradorService.updateAdministrador(req.params.id, req.body);
        if (updatedAdministrador) {
            res.json(updatedAdministrador);
        } else {
            res.status(404).json({ message: 'Administrador no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el administrador', error: error.message });
    }
});

// Eliminar un administrador por ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await administradorService.deleteAdministrador(req.params.id);
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'No se pudo eliminar el administrador' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el administrador', error: error.message });
    }
});

module.exports = router;
