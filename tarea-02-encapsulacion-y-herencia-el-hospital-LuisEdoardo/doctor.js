export default class Doctor{
    /**
     * @param {number} cedula
     * @param {string} especialidad
     * @param {string} nombre
     * @param {number} telefono
     */
    constructor(cedula, especialidad, nombre, telefono){
        this._cedula = cedula
        this._especialidad = especialidad
        this._nombre = nombre
        this._telefono = telefono
    }
    getPerfil(){
        return `Cedula: ${this._cedula}\nEspecialidad: ${this._especialidad}\n Nombre:${this._nombre}\n Telefono: ${this._telefono}`
    }

}