const docenteRepository = require('../repositories/docenteRepository');

class docenteService {
    static async getAllDocentes() {
        return await docenteRepository.findAll();
    }

    static async getDocenteById(id) {
        const docente = await docenteRepository.findById(id);
        if (!docente) {
            throw new Error(`Docente con ID ${id} no encontrado.`);
        }
        return docente;
    }

    static async getDocenteByDni(dni) {
        return await docenteRepository.findByDni(dni);
    }

    static async createDocente(docenteData) {
        const docenteId = await DocenteRepository.create(docenteData);
        return await docenteRepository.findById(docenteId);
    }

    static async updateDocente(id, docenteData) {
        const docente = await docenteRepository.findById(id);
        if (!docente) {
            throw new Error(`Docente con ID ${id} no encontrado.`);
        }
        await DocenteRepository.update(id, docenteData);
        return await docenteRepository.findById(id);
    }

    static async deleteDocente(id) {
        const docente = await docenteRepository.findById(id);
        if (!docente) {
            throw new Error(`Docente con ID ${id} no encontrado.`);
        }
        await docenteRepository.delete(id);
    }
}

module.exports = docenteService;
