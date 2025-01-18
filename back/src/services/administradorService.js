const administradorRepository = require('../repositories/administradorRepository');

class administradorService {
    static async getAllAdministradores() {
        return await administradorRepository.findAll();
    }

    static async getAdministradorById(id) {
        const administrador = await administradorRepository.findById(id);
        if (!administrador) {
            throw new Error(`Administrador con ID ${id} no encontrado.`);
        }
        return administrador;
    }

    static async getAdministradorByDni(dni) {
        return await administradorRepository.findByDni(dni);
    }

    static async createAdministrador(administradorData) {
        const administradorId = await administradorRepository.create(administradorData);
        return await administradorRepository.findById(administradorId);
    }

    static async updateAdministrador(id, administradorData) {
        const administrador = await administradorRepository.findById(id);
        if (!administrador) {
            throw new Error(`Administrador con ID ${id} no encontrado.`);
        }
        await administradorRepository.update(id, administradorData);
        return await administradorRepository.findById(id);
    }

    static async deleteAdministrador(id) {
        const administrador = await administradorRepository.findById(id);
        if (!administrador) {
            throw new Error(`Administrador con ID ${id} no encontrado.`);
        }
        await administradorRepository.delete(id);
    }
}

module.exports = administradorService;
