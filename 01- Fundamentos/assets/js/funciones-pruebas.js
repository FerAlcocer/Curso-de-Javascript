function saludar( nombre ){
    console.log('Hola ' + nombre);
}
function prueba( nombre ){
    console.log('Hola ' + nombre);
    return 1;

    // Esto nunca se va a ejecutar
    console.log('Soy un codigo que esta despues del return');
}

saludar('carlos');
prueba('ñandu');
const retornoPrueba = prueba( 'pepe' );
console.log({ retornoPrueba});

function sumar (a, b){
    return a + b;
}
const sumar2= (a, b) =>{
    return a + b;
}
//Si la funcion de flecha solamente tiene que arrojar el 1 return, se puede escribir de la siguiente forma

// const sumar2 = (a,b) => a + b;

console.log(  sumar(1, 2)  );
console.log(  sumar2(2, 3)  );

function getAleatorio(){
    return Math.random();
}
//Tarea: convertir la funcion de arriba, en una funcion de flecha y que no tenga {}.
const aleatorio = ()=>Math.random();
console.log( aleatorio() );

console.log(  getAleatorio()  );
