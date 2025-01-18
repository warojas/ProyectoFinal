class Conexiones {
    static tableName = 'conexiones';

    constructor(id, cod_alumno, ip_dispositivo, mac_dispositivo, mikrotik_id, hora_conexion, hora_actualizacion, hora_desconexion, hostname, nasipaddress, input_octets, output_octets, causa_terminacion, tipo_servicio) {
        this.id = id;
        this.cod_alumno = cod_alumno;
        this.ip_dispositivo = ip_dispositivo;
        this.mac_dispositivo = mac_dispositivo;
        this.mikrotik_id = mikrotik_id;
        this.hora_conexion = hora_conexion;
        this.hora_actualizacion = hora_actualizacion;
        this.hora_desconexion = hora_desconexion;
        this.hostname = hostname;
        this.nasipaddress = nasipaddress;
        this.input_octets = input_octets;
        this.output_octets = output_octets;
        this.causa_terminacion = causa_terminacion;
        this.tipo_servicio = tipo_servicio;
    }
}

module.exports = Conexiones;
