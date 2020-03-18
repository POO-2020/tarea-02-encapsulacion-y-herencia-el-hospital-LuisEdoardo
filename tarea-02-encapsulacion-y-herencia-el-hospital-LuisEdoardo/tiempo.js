export default class Tiempo{
    /**
     * @param {number} hora
     * @param {number} minutos
     * @param {string} periodo
     */
    constructor(hora, minutos, periodo){
        
        this._hora = hora
        this._minutos = minutos
        this._periodo = periodo.toLowerCase()
        
    }

getFormato12(){
    return `${this._hora} ${this._minutos} ${this._periodo}`
    }



getFormato24(){
    if(this._periodo == 'pm'){
        let horaM = this._hora + 12
            return `${horaM} ${this._minutos}`
        } else{
            return `${this._hora} ${this.minutos}`
        }

    }
}
