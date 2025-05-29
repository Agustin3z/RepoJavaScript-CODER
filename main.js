

const usuario='agustin'
const contraseña='777'
 
//Bienvenida al programa
alert('Bienvenido a continuacion necesitaremos su login para entrar al sistema')

// creaciones de variables

let cantidadintentos=3;
let ingreso=false;

// Logueo

for(i=0; i<cantidadintentos; i++){

    let useringresado= prompt ("Ingresar el usuario");
    let passingresado= prompt ("Ingresar contraseña");

    if(useringresado == null || passingresado == null){
        alert("usuario o contraseña vacios");
        continue;
    }else {
        if(usuario === useringresado && contraseña === passingresado){
        alert("Verificacion confirmada");
        ingreso = true;
        break;
        
        } else if (usuario != useringresado){
            alert("usuario incorrecto");
        }else if (usuario === useringresado && contraseña != passingresado){
            alert("contraseña incorrecta");
        }
    }
}

if(!ingreso){
    alert("cuenta bloqueada")
}



