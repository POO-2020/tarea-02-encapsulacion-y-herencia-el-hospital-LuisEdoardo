export default class Doctor{
    /**
     * @param {number} cedula
     * @param {string} especialidad
     * @param {string} nombre
     * @param {number} telefono
     */
    constructor(cedula, especialidad, nombre, telefono){
        this.cedula = cedula
        this.especialidad = especialidad
        this.nombre = nombre
        this.telefono = telefono
    }
    getPerfil(){
        return `Cedula: ${this.cedula}\nEspecialidad: ${this.especialidad}\n Nombre:${this.nombre}\n Telefono: ${this.telefono}`
    }

}