export default class Nombre{
    constructor(nombre, apellidoP, apellidoM){
        this.nombre = nombre
        this.apellidoP = apellidoP
        this.apellidoM = apellidoM
    }

getNombreCompleto(){
    return `${this.nombre} ${this.apellidoP} ${this.apellidoM}`
}
getApellidoNombre(){
    return `${this.apellidoP} ${this.apellidoM} ${this.nombre}`
}

getIniciales(){
    return `${this.nombre.charAt(0)} ${this.apellidoP.charAt(0)} ${this.apellidoM.charAt(0)}`
}
}