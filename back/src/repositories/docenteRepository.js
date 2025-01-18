const crudRepository = require('../lib/crudRespository');
const Docente = require('../models/Docente');

class docenteRepository extends crudRepository {
    constructor() {
        super(Docente);
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

module.exports = new docenteRepository();
