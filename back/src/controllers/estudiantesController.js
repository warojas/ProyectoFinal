const express = require('express');
const estudianteService = require('../services/estudianteService');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const estudiantes = await estudianteService.getAllEstudiantes();
        res.json(estudiantes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener estudiantes', error: error.message });
    }
});

router.get('/:cod_alumno', async (req, res) => {
    try {
        const estudiante = await estudianteService.getEstudianteByCodAlumno(req.params.cod_alumno);
        if (estudiante) {
            res.json(estudiante);
        } else {
            res.status(404).json({ message: 'Estudiante no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar el estudiante', error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newEstudiante = await estudianteService.createEstudiante(req.body);
        res.status(201).json(newEstudiante);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el estudiante', error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedEstudiante = await estudianteService.updateEstudiante(req.params.id, req.body);
        if (updatedEstudiante) {
            res.json(updatedEstudiante);
        } else {
            res.status(404).json({ message: 'Estudiante no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el estudiante', error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleted = await estudianteService.deleteEstudiante(req.params.id);
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'No se pudo eliminar el estudiante' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el estudiante', error: error.message });
    }
});

module.exports = router;
