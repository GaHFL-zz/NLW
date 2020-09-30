const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado,"
]

//Maneira de voce enviar seus html para o servidor e direcionar eles, "__dirname" serve para mostrar onde está sua pasta
function getSubject(subjectNumber) { 
    const position = + subjectNumber - 1
    return subjects[position]
 }

function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(":")
    return Number((hour * 60) + minutes)
}

 module.exports = {
     subjects,
     weekdays,
     getSubject,
     convertHoursToMinutes
 }