import Tiempos from "./tiempo.js";
import Nombre from "./nombre.js";
import Fecha from "./fecha.js";
import Paciente from "./paciente.js"
import Doctor from "./doctor.js";
import Cita from "./cita.js";
import Hospital from "./hospital.js";
import PacienteAsegurado from "./paciente-Asegurado.js"

const pacienteA = new Paciente({
    nombre: new Nombre("Josue Benjamin", "Iglesias", "Alcaraz"),
    fecha: new Fecha (16 , 6, 2001),
    numero: "3121226734",
})

const pacienteB = new Paciente({
    nombre: new Nombre("Luis", "Morales", "Leyva"),
    fecha: new Fecha (8, 8, 1995),
    numero: "3124478909",
})

const pacienteC = new Paciente({
    nombre: new Nombre("Isabel", "Lugo", "Mendez"),
    fecha: new Fecha (7, 3, 1990),
    numero: "312672984",
})

const doctorA = new Doctor ({
    cedula:"7267DDO273",
     especialidad:"Pediatra",
    nombre: new Nombre("Alberto","Rosales", "Rosales"),
    telefono:"312122435"
})
const doctorB = new Doctor ({
    cedula:"DBZ28638",
    especialidad:"Cirujano",
    nombre: new Nombre("Nestor", "Amezcua", "Luna"),
    telefono:"312536489"
})
const doctorC = new Doctor ({
    cedula:"GDLJ3467",
    especialidad:"Cirujano",
    nombre: new Nombre("Mario", "Cervantes", "Godinez"),
    telefono:"3122389023"
})

class Main {
    probarTiempo() {
        let horas = new Tiempos(11, 22, "pm");
        console.log("-----------Tiempo---------")
        console.log(horas.getFormato12());
        console.log(horas.getFormato24());
    }

    probarNombre() {
        let nombre = new Nombre("Luis Edoardo", "Morales", "Leyva");
        console.log("---------Nombre-----------")
        console.log(nombre.getNombreCompleto())
        console.log(nombre.getApellidoNombre())
        console.log(nombre.getIniciales())
    }

    probarFecha() {
        let dia = new Fecha(9 , 5, 1999)
        
        console.log("---------Fecha------------")
        console.log(dia.getAños())
        console.log(dia.getMeses())
        console.log(dia.getSemanas())
        console.log(dia.getDias())
        console.log(dia.getFecha())
        console.log(dia.getDiaFecha())
    }

    probarPaciente() {
        let paciente = new Paciente({
        nombre: new Nombre("Oscar Alfredo", "Ramirez", "Valenciana"),
        fecha: new Fecha (16,4,1999),
        numero: "3121222434",
        })
        console.log("--------Paciente-----------")
        console.log(paciente.getPerfil())
    }

    probarPacienteAsegurado(){
        let pacienteAsegurado1 = new PacienteAsegurado({
            nombre: new Nombre ("Alfredo","Gomez", "Farias"),
            fecha: new Fecha (1,3,2020),
            numero: "3232321312",
            numeroPoliza: "23232H",
            fechaVigencia: new Fecha (1,5,2022),
            compañia: "Dogoverso Inc."
        })
        console.log("-----Paciente Asegurado----")
        console.log(pacienteAsegurado1.getPerfil())
    }
    
    probarDoctor() {
        let doctor = new Doctor ({
        cedula: ("43HSK34KFJ3"),
        especialidad: ("Medico Cirujano"),
        nombre: new Nombre("Roberto", "Mendoza","Perez"),
        telefono: ("312213342")
        })
        console.log("--------Doctores-----------")
        console.log(doctor.getPerfilb())
    }

    probarCita() {
        let cita = new Cita ({
        fecha: new Fecha(12,4,2020),
        hora: new Tiempos (12,44, "pm"),
        doctor: doctorC,
        paciente: pacienteA,
        })
        console.log("----------Citas------------")
        console.log(cita.getCita())
    }

    probarHospital(){
        let hospitalA = new Hospital ({
            nombre:"Clinica #4",
            direccion:"Avenida Madero, #455"
        })
        console.log("---------Hospital----------")
        

        let cita1 = new Cita ({
            fecha:new Fecha(20,12,2020),
            hora:new Tiempos(5,0,"pm"),
            doctor: doctorA,
            paciente: pacienteB
        })

        let cita2 = new Cita ({
            fecha:new Fecha(3,4,2020),
            hora:new Tiempos(4,0,"pm"),
            doctor: doctorC,
            paciente: pacienteC
        })
        hospitalA.registrarDoctor(doctorA)
        hospitalA.registrarDoctor(doctorB)
        hospitalA.registrarDoctor(doctorC)
        hospitalA.listarDoctores()
        console.log('----Buscar Doctor----')
        console.log(hospitalA._buscarDoctor(doctorA))
        console.log(hospitalA._buscarDoctor(doctorB))
        console.log(hospitalA._buscarDoctor(doctorC))
        console.log('----Encontrar Indice----')
        console.log(hospitalA._encontrarIndiceDoctor(doctorA))
        console.log(hospitalA._encontrarIndiceDoctor(doctorB))
        console.log(hospitalA._encontrarIndiceDoctor(doctorC))
        console.log('----Eliminar Doctor----')
        console.log(hospitalA._eliminarDoctor(doctorA))
        hospitalA.listarDoctores()
        console.log('----Actualizar Doctores----')
        console.log(hospitalA.actualizarDoctor(doctorB,doctorA))
        hospitalA.listarDoctores() 
        console.log('')
        hospitalA.registrarCita(cita1)
        hospitalA.registrarCita(cita2)
        hospitalA.listarCitas()
        console.log('----Buscar Cita----')
        console.log(hospitalA._buscarCita(cita1))
        console.log(hospitalA._buscarCita(cita2))
        console.log('----Encontrar Indice----')
        console.log(hospitalA._encontrarIndiceCita(cita1))
        console.log(hospitalA._encontrarIndiceCita(cita2))
        console.log('----Eliminar Cita----')
        console.log(hospitalA._eliminarCita(cita1))
        hospitalA.listarCitas()
        console.log('----Actualizar Cita----')
        console.log(hospitalA.actualizarCita(cita2,cita1))
        hospitalA.listarCitas()
    }

}

let app = new Main()
app.probarTiempo();
app.probarNombre();
app.probarFecha();
app.probarPaciente();
app.probarDoctor();
app.probarCita();
app.probarHospital();
app.probarPacienteAsegurado();