class Alumno {
    constructor(nombre, apellido, nota) {
        this.nombre = nombre
        this.apellido = apellido
        this.nota = nota
    }
}

const plantilla = document.getElementById('plantillaAlumno')
const alumnos = []

plantilla.addEventListener('submit', (event) => {
    event.preventDefault()
    let nombre = document.getElementById('nombreAlumno').value
    let apellido = document.getElementById('apellidoAlumno').value
    let nota = document.getElementById('notaAlumno').value
    const alumno = new Alumno(nombre, apellido, nota)
    alumnos.push(alumno)
    console.log(alumnos)
})

const botonMostrarAlumnos = document.getElementById('botonMostrarAlumnos')

botonMostrarAlumnos.addEventListener('click', () => {
    divUsers.innerHTML = ""
    alumnos.forEach(alumno => {
        divUsers.innerHTML += `
        <div><br>
            <h4>${alumno.nombre}</h4>
            <h4>${alumno.apellido}</h4>
            <h5>${alumno.nota}</h5>
        </div>
        `
        if(alumno.nota >= 7) {
            divUsers.innerHTML += `
            <div>
                <p>Aprobado</p>
            </div>
            `
        } else {
            divUsers.innerHTML += `
            <div>
                <p>Desaprobado</p>
            </div>
            `
        }
    })
})