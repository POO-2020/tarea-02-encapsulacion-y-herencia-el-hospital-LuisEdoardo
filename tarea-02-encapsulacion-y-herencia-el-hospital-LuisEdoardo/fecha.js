export default class Fecha{
/**
 * @param {number} dia
 * @param {string} mes
 * @param {number} año
 */
constructor(dia,mes,año){
    this._fecha = new Date(año,mes -1,dia)
    this._meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    this._dia = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes','Sabado']
}
getAños(){
    let añosR = new Date(Date.now() - this._fecha)
    let mAños = 1000 * 60 * 60 * 24 * 365
    let años = Math.trunc(añosR/mAños)
    return `${años}`
}
getMeses(){
    let mesesR = new Date(Date.now() - this._fecha)
    let mMeses = (1000 * 60 * 60 * 24 * 365) / 12
    let meses1 = Math.trunc(mesesR/mMeses)
    return `${meses1}`
}
getSemanas(){
    let semanasR = new Date(Date.now() - this._fecha)
    let mSemanas = (1000 * 60 * 60 * 24 * 365) / 52.1429
    let semanas = Math.trunc(semanasR/mSemanas)
    return `${semanas}` 
}

getDias(){
    let diasr = new Date(Date.now() - this._fecha)
    let mDias = 1000 * 60 * 60 * 24
    let dias = Math.trunc(diasr/mDias)
    return `${dias}`
}
getFecha(){
    return `${this._fecha.getDate()}/${this._meses[this._fecha.getMonth()]}/${this._fecha.getFullYear()}`
}
getDiaFecha(){
    return `${this._dia[this._fecha.getDay() -1]}`
}
}
