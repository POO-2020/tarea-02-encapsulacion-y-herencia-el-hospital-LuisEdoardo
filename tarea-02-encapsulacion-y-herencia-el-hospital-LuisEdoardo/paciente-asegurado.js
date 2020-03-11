import Paciente from "./paciente.js"

export default class PacienteAsegurado extends Paciente{
    constructor(numeroP, fechaFinVigencia, compañia){
        super(nombre, fecha, numero)
        this._numeroP = numeroP
        this._fechaFinVigencia = fechaFinVigencia
        this._compañia = compañia
    }
    getPerfil(){
     return ``   
    }
}