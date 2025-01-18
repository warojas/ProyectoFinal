const monitoreoRepositorio = require('../repositories/monitoreoRepository');

class MonitoreoService {
    obtenerConexionesActivas() {
        return monitoreoRepositorio.obtenerConexionesActivas();
    }

    obtenerIntentosFallidos() {
        return monitoreoRepositorio.obtenerIntentosFallidos();
    }

    obtenerEstadoDispositivos() {
        return monitoreoRepositorio.obtenerEstadoDispositivos();
    }
}

module.exports = new MonitoreoService();
