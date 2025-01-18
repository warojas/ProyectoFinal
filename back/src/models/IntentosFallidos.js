class IntentosFallidos {
    static tableName = 'intentos_fallidos';

    constructor(id, cod_alumno, ip_dispositivo, mac_dispositivo, mikrotik_id, intento_fecha, resultado, mensaje_error) {
        this.id = id;
        this.cod_alumno = cod_alumno;
        this.ip_dispositivo = ip_dispositivo;
        this.mac_dispositivo = mac_dispositivo;
        this.mikrotik_id = mikrotik_id;
        this.intento_fecha = intento_fecha;
        this.resultado = resultado;
        this.mensaje_error = mensaje_error;
    }
}

module.exports = IntentosFallidos;
