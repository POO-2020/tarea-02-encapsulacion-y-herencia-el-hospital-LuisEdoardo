import Paciente from "./paciente.js"
import Fecha from "./fecha.js"

export default class PacienteAsegurado extends Paciente{
    /**
     * 
     * @param {number} numeroPoliza 
     * @param {Fecha} fechaFinVigencia 
     * @param {string} compañia 
     */
    constructor({nombre, fecha, numero, numeroPoliza, fechaFinVigencia, compañia}){
        super({nombre, fecha, numero})
        this._nombre = nombre
        this._fecha = fecha
        this._numero = numero
        this._numeroPoliza = numeroPoliza
        this._fechaFinVigencia = fechaFinVigencia
        this._compañia = compañia
        
    }
    getPerfil(){
     return `Nombre: ${this._nombre.getNombreCompleto()}\nFecha: ${this._fecha.getFecha()}\nNumero: ${this._numero}\nNumero de Poliza: ${this._numeroPoliza}\nFecha de Vigencia: ${this._fechaFinVigencia.getFecha()}\nCompañia: ${this._compañia} `   
    }
}