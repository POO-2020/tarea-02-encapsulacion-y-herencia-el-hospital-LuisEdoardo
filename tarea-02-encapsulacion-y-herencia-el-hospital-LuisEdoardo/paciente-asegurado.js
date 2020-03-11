import Paciente from "./paciente.js"

export default class PacienteAsegurado extends Paciente{
    constructor(numeroP, fechaFinVigencia, compañia){
        super(nombre, fecha, numero)
        this.numeroP = numeroP
        this.fechaFinVigencia = fechaFinVigencia
        this.compañia = compañia
    }
    
}