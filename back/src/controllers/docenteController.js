const express = require('express');
const docenteService = require('../services/docenteService');

const router = express.Router();

// Obtener todos los docentes
router.get('/', async (req, res) => {
    try {
        const docentes = await docenteService.getAllDocentes();
        res.json(docentes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener docentes', error: error.message });
    }
});

// Obtener un docente por ID
router.get('/:id', async (req, res) => {
    try {
        const docente = await docenteService.getDocenteById(req.params.id);
        if (docente) {
            res.json(docente);
        } else {
            res.status(404).json({ message: 'Docente no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar el docente', error: error.message });
    }
});

// Crear un nuevo docente
router.post('/', async (req, res) => {
    try {
        const newDocente = await docenteService.createDocente(req.body);
        res.status(201).json(newDocente);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el docente', error: error.message });
    }
});

// Actualizar un docente por ID
router.put('/:id', async (req, res) => {
    try {
        const updatedDocente = await docenteService.updateDocente(req.params.id, req.body);
        if (updatedDocente) {
            res.json(updatedDocente);
        } else {
            res.status(404).json({ message: 'Docente no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el docente', error: error.message });
    }
});

// Eliminar un docente por ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await docenteService.deleteDocente(req.params.id);
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'No se pudo eliminar el docente' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el docente', error: error.message });
    }
});

module.exports = router;
