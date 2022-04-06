// function crearPersona( nombre, apellido){
//     return { nombre: nombre,
//              apellido: apellido
//             }
// }
// function crearPersona( nombre, apellido){
//     return { nombre,apellido}
// }
const crearPersona = ( nombre, apellido) =>({ nombre,apellido});

const persona = crearPersona( 'Fernando', 'Herrera' );
console.log( persona );


function imprimeArgumentos() {
    console.log( arguments );
}

const imprimerArgumentos2 = ( edad, ...args ) => {
    // console.log({ edad, args });
    return args;
}

const [ casado, vivo, nombre, saludo ] = imprimerArgumentos2( 10, true, false, 'Fernando', 'Hola');
console.log({ casado, vivo, nombre, saludo});

const { apellido: nuevoApellido } = crearPersona( 'Lucas', 'Gonzales');
console.log( {nuevoApellido}); 


const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes}) => {
    
    // edad = edad || 15;

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(tony);
