const CrudRepository = require('../lib/crudRespository');

class MonitoreoRepository extends CrudRepository {
    constructor() {
        super({ tableName: null });
    }

    async obtenerConexionesActivas() {
        const [rows] = await this.pool.query(`
            SELECT * 
            FROM conexiones 
            WHERE hora_desconexion IS NULL
        `);
        return rows;
    }

    async obtenerIntentosFallidos() {
        const [rows] = await this.pool.query(`
            SELECT * 
            FROM intentos_fallidos
            ORDER BY intento_fecha DESC
        `);
        return rows;
    }

    async obtenerEstadoDispositivos() {
        const [rows] = await this.pool.query(`
            SELECT mikrotik_id, 
                   COUNT(CASE WHEN hora_desconexion IS NULL THEN 1 END) AS usuarios_conectados,
                   CASE WHEN COUNT(CASE WHEN hora_desconexion IS NULL THEN 1 END) > 0 THEN 'activo' ELSE 'inactivo' END AS estado
            FROM conexiones
            GROUP BY mikrotik_id
        `);
        return rows;
    }
}

module.exports = new MonitoreoRepository();
