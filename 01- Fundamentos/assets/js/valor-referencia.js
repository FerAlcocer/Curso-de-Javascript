let a = 10;
let b = a;
a = 30;

console.log( a, b );
console.log({ a, b });

let juan = { nombre: 'Juan' };
let ana = {juan};
ana.nombre = 'Ana';

console.log({ juan, ana });

let juan2 = { nombre: 'Juan' };
let ana2 = { ...juan };
ana2.nombre = 'Ana';

console.log({ juan2, ana2 });

const cambiaNombre = ( {...persona} ) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony  = cambiaNombre( peter );

console.log( peter, tony);
console.log({ peter, tony});

// Arreglos

const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas. slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');



otrasFrutas.push('Mango');
console.log({ frutas, otrasFrutas});