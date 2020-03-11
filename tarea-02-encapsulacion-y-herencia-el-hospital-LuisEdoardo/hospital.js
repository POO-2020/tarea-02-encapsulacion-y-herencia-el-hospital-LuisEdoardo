export default class Hospital{
/**
 * @param {string} nombre
 * @param {string} direccion
 */
constructor(nombre,direccion){
    this._nombre = nombre 
    this._direccion = direccion
    this._listadocs = new Array
    this._listacita = new Array
}
registrarDoctor(doctor){
    this._listadocs.push(doctor)
}
listarDoctores(){
    this._listadocs.forEach((doctor , i) => {
        console.log(`${i+1} ${doctor.getPerfil()}`)
    })
}
registrarCita(cita){
    this._listacita.push(cita)
}
listarCitas(){
    this._listacita.forEach((cita, i) => {
        console.log(`${i+1} ${cita.getPerfil()}`)
    })
}
}