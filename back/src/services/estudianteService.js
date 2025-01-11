const estudianteRepository = require('../repositories/estudianteRepository');

class EstudianteService {
    getAllEstudiantes() {
        return estudianteRepository.findAll();
    }

    getEstudianteByCodAlumno(cod_alumno) {
        return estudianteRepository.findByCodAlumno(cod_alumno);
    }

    createEstudiante(estudianteData) {
        return estudianteRepository.create(estudianteData);
    }

    updateEstudiante(id, estudianteData) {
        return estudianteRepository.update(id, estudianteData);
    }

    deleteEstudiante(id) {
        return estudianteRepository.delete(id);
    }
}

module.exports = new EstudianteService();
