const crudRepository = require('../lib/crudRespository');
const Administrador = require('../models/Administrador');

class AdministradorRepository extends crudRepository {
    constructor() {
        super(Administrador);
    }

    async findByDni(dni) {
        const [rows] = await this.pool.query(`SELECT * FROM ${this.tableName} WHERE dni = ?`, [dni]);
        return rows[0];
    }

    async findByCorreoElectronico(correo_electronico) {
        const [rows] = await this.pool.query(`SELECT * FROM ${this.tableName} WHERE correo_electronico = ?`, [correo_electronico]);
        return rows[0];
    }
}

module.exports = new AdministradorRepository();
