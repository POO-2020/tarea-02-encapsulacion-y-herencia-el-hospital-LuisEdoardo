import Nombre from "./nombre.js"

export default class Doctor{
    /**
     * @param {number} cedula
     * @param {string} especialidad
     * @param {Nombre} nombre
     * @param {number} telefono
     */
    constructor({cedula, especialidad, nombre, telefono}){
        this._cedula = cedula
        this._especialidad = especialidad
        this._nombre = nombre
        this._telefono = telefono
    }

    getCedula(){
        return this._cedula
    }

    getNombre(){
        return this.nombre
    }

    esIgualA(doctor){
        if (doctor.getCedula() === this._cedula){
            return true
        }
        return false
    }

    getPerfilb(){
        return `Cedula: ${this._cedula}\nEspecialidad: ${this._especialidad}\n Nombre:${this._nombre.getNombreCompleto()}\n Telefono: ${this._telefono}`
    }

}