export default class Paciente{
    /**
     * @param {string} nombre
     * @param {number} fecha
     * @param {number} numero
     */
    constructor(nombre, numero, fecha){
        this._nombre = nombre
        this._fecha = fecha
        this._numero = numero
    }
    getPerfil(){
        return `${this._nombre} ${this._fecha} ${this._numero}`
    }
}