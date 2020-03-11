export default class Cita{
    /**
     * @param {string} fecha
     * @param {string} hora
     * @param {string} doctor
     * @param {string} paciente
     */
    constructor(fecha, hora, doctor, paciente){
        this.fecha = fecha
        this.hora = hora
        this.doctor = doctor
        this.paciente = paciente
    }

    getPerfil(){
        return `Cita No. # ${Math.trunc((Math.random() * (100 - 0) + 0))}\nFecha: ${this.fecha}\nHora: ${this.hora}\nDoctor: ${this.doctor}\nPaciente: ${this.paciente}`
    }
}