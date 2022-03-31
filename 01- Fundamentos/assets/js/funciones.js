function saludar() {
    console.log('Hola mundo');
}

// const saludar2= function(){
//     console.log('Hola mundo');
// }

function saludoNombre( nombre ) {
    console.log('Hola ' + nombre );
}

const saludarFlecha= ()=>{
    console.log('Hola flecha');
}

const saludarFlecha2= ( nombre )=>{
    console.log('Hola ' + nombre );
}

saludar();
saludar();
saludar();

let personaje= { 
    nombre: 'Lucas',
}

saludoNombre(personaje.nombre);

saludarFlecha();
saludarFlecha2('Carlos');
