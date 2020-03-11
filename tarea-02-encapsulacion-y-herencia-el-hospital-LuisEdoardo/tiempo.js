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
    getFormato24(){
        let hora = this._hora
        if(this.periodo === "pm"){
            hora = hora +12
            return `${hora}:${this._minutos}`
        }else{
            return `${hora}:${this._minutos}`
        }
    }
    getFormato12(){
        let hora = this._hora
        if (hora >= 12){
            this._periodo = 'pm'
            hora = hora - 12 
            return `${hora}:${this._minutos}:${this._periodo}`
            
        }else{
            this._periodo = 'am'
            return `${hora}:${this._minutos}:${this._periodo}`
        }
        
    }
}

