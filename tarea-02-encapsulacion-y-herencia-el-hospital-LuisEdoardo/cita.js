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
        return `Cita No. # ${Math.trunc((Math.random() * (100 - 0) + 0))}\nFecha: ${this._fecha.getFecha()}\nHora: ${this._hora.getFormato24()}\nDoctor: ${this._doctor._nombre.getNombreCompleto()}\nPaciente: ${this._paciente._nombre.getNombreCompleto()}`
    }
}