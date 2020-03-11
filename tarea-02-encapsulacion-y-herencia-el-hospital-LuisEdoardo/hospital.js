export default class Hospital{
/**
 * @param {string} nombre
 * @param {string} direccion
 */
constructor(nombre,direccion){
    this.nombre = nombre 
    this.direccion = direccion
    this.listadocs = new Array
    this.listacita = new Array
}
registrarDoctor(doctor){
    this.listadocs.push(doctor)
}
listarDoctores(){
    this.listadocs.forEach((doctor , i) => {
        console.log(`${i+1} ${doctor.getPerfil()}`)
    })
}
registrarCita(cita){
    this.listacita.push(cita)
}
listarCitas(){
    this.listacita.forEach((cita, i) => {
        console.log(`${i+1} ${cita.getPerfil()}`)
    })
}
}