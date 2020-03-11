export default class Cita{
    /**
     * @param {string} fecha
     * @param {string} hora
     * @param {string} doctor
     * @param {string} paciente
     */
    constructor(fecha, hora, doctor, paciente){
        this._fecha = fecha
        this._hora = hora
        this._doctor = doctor
        this._paciente = paciente
    }

    getPerfil(){
        return `Cita No. # ${Math.trunc((Math.random() * (100 - 0) + 0))}\nFecha: ${this._fecha}\nHora: ${this._hora}\nDoctor: ${this._doctor}\nPaciente: ${this._paciente}`
    }
}