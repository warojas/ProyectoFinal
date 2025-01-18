const CrudRepository = require('../lib/crudRespository');
const Estudiante = require('../models/Estudiante');

class EstudianteRepository extends CrudRepository {
    constructor() {
        super(Estudiante);
    }

    async findByCodAlumno(cod_alumno) {
        const [rows] = await this.pool.query(`SELECT * FROM ${this.tableName} WHERE cod_alumno = ?`, [cod_alumno]);
        return rows[0];
    }
}

module.exports = new EstudianteRepository();
