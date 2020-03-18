import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Doctor from "./doctor.js"
import Paciente from "./paciente.js"

export default class Cita{
    /**
     * @param {Fecha} fecha
     * @param {Tiempo} hora
     * @param {Doctor} doctor
     * @param {Paciente} paciente
     */
    constructor({fecha, hora, doctor, paciente}){
        this._fecha = fecha
        this._hora = hora
        this._doctor = doctor
        this._paciente = paciente
    }

    getCita(){
        return this._fecha
    }

    esIgualA(cita){
        if(cita.getCita() === this._fecha){
            return true
        }
        return false
    }

    getPerfil(){
        return `Cita No. # ${Math.trunc((Math.random() * (100 - 0) + 0))}\nFecha: ${this._fecha}\nHora: ${this._hora.getFormato12()}\nDoctor: ${this._doctor}\nPaciente: ${this._paciente}`
    }
}