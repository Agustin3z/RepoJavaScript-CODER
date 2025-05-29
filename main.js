


 
// //Bienvenido al programa
// alert('Bienvenido a continuacion necesitaremos su login para entrar al sistema')

// // creaciones de variables y contante
// const usuario='agustin'
// const contraseña='777'
// let cantidadintentos=3;
// let ingreso=false;

// // Logueo

// for(i=0; i<cantidadintentos; i++){

//     let useringresado= prompt ("Ingresar el usuario");
//     let passingresado= prompt ("Ingresar contraseña");

//     if(useringresado == null || passingresado == null){
//         alert("usuario o contraseña vacios");
//         continue;
//     }else {
//         if(usuario === useringresado && contraseña === passingresado){
//         alert("Verificacion confirmada");
//         ingreso = true;
//         break;
        
//         } else if (usuario != useringresado){
//             alert("usuario incorrecto");
//         }else if (usuario === useringresado && contraseña != passingresado){
//             alert("contraseña incorrecta");
//         }
//     }
// }

// if(!ingreso){
//     alert("cuenta bloqueada")
// }

//CREACION DE LA SIGUIENTE PAGINA CON DECLARACION DE VARIABLES, CONTANTES Y UN SWITCH

let habitaciones = [];
let bandera = true;

//Funcion para Crear las habitaciones
function creacionhabitaciones(numerohabitacion, nombrehabitacion, categoriahabitacion, preciohabitacion) {
    const auxiliar = {
        numero: numerohabitacion,
        nombre: nombrehabitacion,
        categoria: categoriahabitacion,
        precio: preciohabitacion,
        reservada: false,
    };
    habitaciones.push(auxiliar);
}

//Funcion para mostrar las habitaciones
function mostrarhabitaciones() {
    let mensaje = "Las habitaciones son:\n\n";
    
    for (let i = 0; i < habitaciones.length; i++) {
        mensaje += `${habitaciones[i].numero} - ${habitaciones[i].nombre} - ${habitaciones[i].categoria} - $${habitaciones[i].precio} - ${habitaciones[i].reservada ? "Reservada" : "Disponible"}\n`;
    }

    alert(mensaje);
}

//Funcion para reservar una habitacion
function reservahabitacion(numerohabitacion) {
    let habitacion = habitaciones.find(h => h.numero === numerohabitacion);

    if (!habitacion) {
        alert(`Habitación ${numerohabitacion} no existe.`);
        return;
    }

    if (habitacion.reservada) {
        alert(`La habitación ${numerohabitacion} ya está reservada.`);
    } else {
        habitacion.reservada = true;
        alert(`Habitación ${numerohabitacion} reservada con éxito.`);
    }
}

// Menú principal
const menu = "Bienvenidos al Resort. ¿Qué desea hacer?\n\n1 - Ingresar habitaciones\n2 - Ver habitaciones disponibles\n3 - Reservar habitación\n4 - SALIR";

while (bandera) {
    let opciones = Number(prompt(menu));

    switch (opciones) {
        case 1:
            let auxnumero = prompt("Ingresar el número de la habitación:");
            let auxnombre = prompt("Ingresar el nombre de la habitación:");
            let auxcategoria = prompt("Ingresar la categoría:");
            let auxprecio = prompt("Ingresar el precio:");

            creacionhabitaciones(auxnumero, auxnombre, auxcategoria, auxprecio);
            break;

        case 2:
            mostrarhabitaciones();
            break;

        case 3:
            let numeroReserva = prompt("Ingrese el número de habitación a reservar:");
            reservahabitacion(numeroReserva);
            break;

        case 4:
            bandera = false;
            break;

        default:
            alert("Opción inválida. Intente de nuevo.");
    }
}






