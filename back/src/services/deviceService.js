const pool = require('../lib/crudRespository'); // Asume que tienes un pool de MySQL configurado

class DeviceService {
    async getDeviceDetails(macAddress) {
        const macPrefix = macAddress.slice(0, 8).toUpperCase(); // Extrae el prefijo de la MAC
        const [rows] = await pool.query(
            `SELECT manufacturer, device_model FROM oui_data WHERE mac_prefix = ?`,
            [macPrefix]
        );
        return rows[0] || { manufacturer: 'Desconocido', device_model: 'Desconocido' };
    }
}

module.exports = new DeviceService();
