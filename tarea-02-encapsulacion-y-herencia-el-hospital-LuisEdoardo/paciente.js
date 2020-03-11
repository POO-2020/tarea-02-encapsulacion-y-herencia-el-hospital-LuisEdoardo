export default class Paciente{
    /**
     * @param {string} nombre
     * @param {number} fecha
     * @param {number} numero
     */
    constructor(nombre, numero, fecha){
        this.nombre = nombre
        this.fecha = fecha
        this.numero = numero
    }
    getPerfil(){
        return `${this.nombre} ${this.fecha} ${this.numero}`
    }
}