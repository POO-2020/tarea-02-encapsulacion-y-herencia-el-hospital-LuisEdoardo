import Nombre from "./nombre.js"
import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Paciente from "./paciente.js"
import Doctor from "./doctor.js"
import Cita from "./cita.js"
import Hospital from "./hospital.js"
class Main{
probarNombres(){
    console.log('<--------------------Nombres---------------------->')
    let nombrePaciente = new Nombre('Luis Edoardo', 'Morales', 'Leyva')
    console.log(nombrePaciente.getNombreCompleto())
    console.log(nombrePaciente.getApellidoNombre())
    console.log(nombrePaciente.getIniciales())

}
probarTiempo(){
console.log('<--------------------Tiempo---------------------->')
let h = new Tiempo(17,25,"AM")
console.log(h.getFormato24())
console.log(h.getFormato12())
}

probarFecha(){
    console.log('<--------------------Fecha---------------------->')
    let fecha = new Fecha(1,2,2000)
    console.log(`El día fue ${fecha.getDiaFecha()}`);
    console.log(`Han pasado ${fecha.getAños()} Años`)
    console.log(`Han pasado ${fecha.getMeses()} Meses`);
    console.log(`Han pasado ${fecha.getSemanas()} Semanas`);
    console.log(`Han pasado ${fecha.getDias()} Días`);
}

probarPaciente(){
    console.log('<--------------------Paciente---------------------->')
    let fecha = new Fecha(1, 2, 2000)
    let nombrePaciente = new Nombre('Rodolfo Alar', 'Serrano', 'Elias')
    let paciente = new Paciente(nombrePaciente.getNombreCompleto(), fecha.getFecha(), 3121890989)
    console.log(`${paciente.getPerfil()}`)
}

probarDoctor(){
    console.log('<--------------------Doctor---------------------->')
    let nombreDoctor = new Nombre('José Carlos', 'Barboza', 'Mendez')
    let doctor = new Doctor(56784321, 'Pediatra', nombreDoctor.getNombreCompleto(),3126783452)
    console.log(`${doctor.getPerfil()}`)
}
probarCita(){
    console.log('<--------------------Cita---------------------->')
    let nombrePaciente = new Nombre('Alvaro', 'Morales', 'Leyva')
    let fechaPaciente = new Fecha(24, 3, 2001)
    let paciente = new Paciente(nombrePaciente.getNombreCompleto(), fechaPaciente.getFecha(), 3129027892)
    let doctor = new Nombre('Carolina', 'Leyva', 'Tirado')
    let fecha = new Fecha(25, 2, 2020)
    let tiempo = new Tiempo(9,36, 'am')
    let cita = new Cita(fecha.getFecha(),tiempo.getFormato12(),doctor.getNombreCompleto(),paciente.getPerfil())
    console.log(`${cita.getPerfil()}`)
}
probarHospital(){
    console.log('<--------------------Hospital---------------------->')
    let hospital = new Hospital('Puerta de vibranium', 'Pozayork 24')
    let doctor1 = new Doctor(92637152, 'Neurologa', new Nombre('Myriam', 'Sanchez', 'Pereira').getNombreCompleto(), 3122768967)
    let doctor2 = new Doctor(67263867, 'Ginecologo', new Nombre('Manuel', 'Manolo', 'Morales', 'Mora').getNombreCompleto(), 3122335086)

    let cita1 = new Cita(
        new Fecha(27, 2, 2020).getFecha(),
        new Tiempo(18, 40, 'pm').getFormato12(),
        new Doctor(42536727, 'Cirujano', new Nombre('Ivan', 'Iglesias', 'Covarrubias').getNombreCompleto(), 3127642354).getPerfil(),
        new Paciente(new Nombre('Jezer', 'Aguirre', 'Ponce').getNombreCompleto(), new Fecha(23, 6, 1990).getFecha(), 3126373908).getPerfil()
    )

    let cita2 = new Cita(
        new Fecha(3, 3, 2020).getFecha(),
        new Tiempo(11, 30, 'am').getFormato12(),
        new Doctor(62735422, 'Urologo', new Nombre('Gustavo', 'Contreras', 'Guzman').getNombreCompleto(), 3122847536).getPerfil(),
        new Paciente(new Nombre('Alar', 'Gonzales', 'Alcaraz').getNombreCompleto(), new Fecha(16, 8, 1995).getFecha(), 3126789356).getPerfil()
    )

    hospital.registrarDoctor(doctor1)
    hospital.registrarDoctor(doctor2)
    hospital.listarDoctores()
    hospital.registrarCita(cita1)
    hospital.registrarCita(cita2)
    hospital.listarCitas()
}

}
let app = new Main

app.probarNombres()
app.probarTiempo()
app.probarFecha()
app.probarPaciente()
app.probarDoctor()
app.probarCita()
app.probarHospital()