let a = 10;

if ( a>= 10 ) {
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}


// console.log('Fin de programa');

const hoy = new Date(); //{}
let dia = hoy.getDay(); // 0: Domingo, 1: lunes, 2: martes .....
console.log({ dia });
if ( dia === 0 ) {
    console.log('Domingo');
}else if( dia === 1 ) {
    console.log('Lunes');


    // if ( dia === 1 ) {
    //     console.log('Lunes');
    // }else {
    //     console.log('No es lunes');
    // }


} else if ( dia === 2 ){
    console.log('Martes');
}else{
    console.log('No es lunes, martes o domingo....');
}

const semana= ['Domingo', 'lunes ', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];


// const semana= {
//     0: 'Domingo',
//     1: 'lunes ',
//     2: 'Martes',
//     3: 'Miercoles',
//     4: 'Jueves',
//     5: 'Viernes',
// 6: 'Sabado'};

dia = 3;
console.log('El dia de la semana es: ' + semana[dia] || 'Dia no valido');