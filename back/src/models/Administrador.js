class Administrador {
    static tableName = 'administradores';

    constructor(
        id,
        nombres,
        apellido_paterno,
        apellido_materno,
        dni,
        correo_electronico,
        contrasena,
        fecha_creacion,
        fecha_actualizacion
    ) {
        this.id = id;
        this.nombres = nombres;
        this.apellido_paterno = apellido_paterno;
        this.apellido_materno = apellido_materno;
        this.dni = dni;
        this.correo_electronico = correo_electronico;
        this.contrasena = contrasena;
        this.fecha_creacion = fecha_creacion;
        this.fecha_actualizacion = fecha_actualizacion;
    }
}

module.exports = Administrador;
