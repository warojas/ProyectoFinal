class Estudiante {
    static tableName = 'estudiantes';

    constructor(
        id,
        cod_especialidad,
        txt_carrera,
        cod_alumno,
        cod_documento,
        txt_apellido_paterno,
        txt_apellido_materno,
        txt_nombres,
        cod_clave,
        op
    ) {
        this.id = id;
        this.cod_especialidad = cod_especialidad;
        this.txt_carrera = txt_carrera;
        this.cod_alumno = cod_alumno;
        this.cod_documento = cod_documento;
        this.txt_apellido_paterno = txt_apellido_paterno;
        this.txt_apellido_materno = txt_apellido_materno;
        this.txt_nombres = txt_nombres;
        this.cod_clave = cod_clave;
        this.op = op;
    }
}

module.exports = Estudiante;
