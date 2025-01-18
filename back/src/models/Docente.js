class Docente {
    static tableName = 'docentes';

    constructor(
        id,
        nombre,
        apellido_paterno,
        apellido_materno,
        dni,
        correo_electronico,
        contrasena,
        facultad,
        fecha_creacion,
        fecha_actualizacion
    ) {
        this.id = id;
        this.nombre = nombre;
        this.apellido_paterno = apellido_paterno;
        this.apellido_materno = apellido_materno;
        this.dni = dni;
        this.correo_electronico = correo_electronico;
        this.contrasena = contrasena;
        this.facultad = facultad;
        this.fecha_creacion = fecha_creacion;
        this.fecha_actualizacion = fecha_actualizacion;
    }
}

module.exports = Docente;