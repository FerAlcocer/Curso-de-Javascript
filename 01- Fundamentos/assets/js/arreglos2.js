let juegos= ['lol', 'dota', 'd3', 'aoe'];
console.log('Largo:' + juegos.length);


let primero= juegos[0];
let ultimo = juegos[juegos.length - 1];
 
console.log({primero, ultimo});

juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr})
});

let nuevaLongitud = juegos.push('RE');
console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.unshift('Elden Ring');
console.log ({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop();
console.log ({juegoBorrado, juegos});


console.log (juegos);
let pos = 1;
let deletedGames = juegos.slice (pos, 3);
console.log ({deletedGames, juegos});

let aoeIndex = juegos.indexOf('aoe');
console.log ({ aoeIndex });
