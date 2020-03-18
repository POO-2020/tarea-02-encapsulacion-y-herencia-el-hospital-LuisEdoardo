import Nombre from "./nombre.js"
import Fecha from "./fecha.js"

export default class Paciente{
    /**
     * @param {Nombre} nombre
     * @param {Fecha} fecha
     * @param {number} numero
     */
    constructor({nombre, numero, fecha}){
        this._nombre = nombre
        this._fecha = fecha
        this._numero = numero
    }
    getPerfil(){
        return `${this._nombre.getNombreCompleto()} ${this._fecha.getFecha()} ${this._numero}`
    }
}