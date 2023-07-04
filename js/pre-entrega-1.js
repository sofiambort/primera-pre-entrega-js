let diaDeLaSemana = prompt ("Ingrese un dia de la semana del Lunes al Viernes");
let obrasocial = prompt ("Tiene obra social? ingrese si o no");
let edad = prompt ("Ingrese su edad");

switch (diaDeLaSemana) {
        case "Lunes":
            console.log("Hay un turno disponible a las:");
            for (let x = 15; x <= 15; x++) {
                console.log ("- " + x + "hs");
            }
            break;
        case "Martes":
            console.log("Hay tres turnos disponibles a las:");
            for (let x = 10; x <= 10; x++) {
                console.log ("- " + x + "hs");
            }
            for (let x = 12; x <= 12; x++) {
                console.log ("- " + x + "hs");
            }
            for (let x = 14; x <= 14; x++) {
                console.log ("- " + x + "hs");
            }
            break;
        case "Miercoles":
            console.log("Estan todos los turnos disponibles a las:");
            for (let x = 9; x <= 9; x++) {
                console.log ("- " + x + "hs");
            }
            for (let x = 10; x <= 10; x++) {
                console.log ("- " + x + "hs");
            }
            for (let x = 11; x <= 11; x++) {
                console.log ("- " + x + "hs");
            }
            for (let x = 12; x <= 12; x++) {
                console.log ("- " + x + "hs");
            }
            for (let x = 13; x <= 13; x++) {
                console.log ("- " + x + "hs");
            }
            for (let x = 14; x <= 14; x++) {
                console.log ("- " + x + "hs");
            }
            break;
        case "Jueves":
            console.log("Hay dos turnos disponibles a las:");
            for (let x = 9; x <= 9; x++) {
                console.log ("- " + x + "hs");
            }
            for (let x = 12; x <= 12; x++) {
                console.log ("- " + x + "hs");
            }
            break;
        case "Viernes":
            console.log("Hay cuatro turnos disponibles a las: ");
            for (let x = 10; x <= 10; x++) {
                console.log ("- " + x + "hs");
            }
            for (let x = 11; x <= 11; x++) {
                console.log ("- " + x + "hs");
            }
            for (let x = 13; x <= 13; x++) {
                console.log ("- " + x + "hs");
            }
            for (let x = 14; x <= 14; x++) {
                console.log ("- " + x + "hs");
            }
            break;
}
switch (obrasocial) {
    case "si":
        console.log("debe traer solamente su DNI");
        break;
    case "no":
        console.log("Debe abonar en mesa de entrada $3.000");
        break;
}

if (edad >= 18) {
    console.log ("Por ser mayor de edad, puedes presentarte solo y con tu DNI");
} else {
    console.log("Por ser menor de edad, debes presentarte con un adulto")
}

let especialidad = prompt ("Ingresa la especialidad Clinico/Pediatria/Dermatología/Ginecología");

switch (especialidad){
    case "Clínico":
        function medicoEspecialista(nombre, apellido){
            console.log("El médico de turno es: " + nombre + apellido);
        }
    medicoEspecialista ("Dr. Javier ", "Gómez");
        break;
    case "Pediatría":
        function medicoEspecialista(nombre, apellido){
            console.log("El médico de turno es: " + nombre + apellido);
        }
    medicoEspecialista ("Dra. Milagros ", "Parola");
        break;
    case "Dermatología":
        function medicoEspecialista(nombre, apellido){
            console.log("El médico de turno es: " + nombre + apellido);
        }
    medicoEspecialista ("Dr. Eduardo ", "Salcedo");
        break;
    case "Ginecología":
        function medicoEspecialista(nombre, apellido){
            console.log("El médico de turno es: " + nombre + apellido);
        }
    medicoEspecialista ("Dra. Belén ", "Eberhardt");
        break;
}