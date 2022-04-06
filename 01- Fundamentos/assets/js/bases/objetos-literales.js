let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coordenadas: {
        lat: 34.034,
        lng: -118.70,
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip:'10880, 90265',
        ubicacion: 'Malibu, california',
    },
    'Ultima pelicula': 'Infinity War',
};

console.log( personaje );
console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);
console.log('Edad:', personaje.edad);
console.log('Coordenadas:', personaje.coordenadas);
console.log('Coordenadas, latitud:', personaje.coordenadas.lat);
console.log('Numero de trajes:', personaje.trajes.length);
console.log('Ultimo traje:', personaje.trajes[personaje.trajes.length -1 ]);
console.log('Ultima pelicula', personaje['Ultima pelicula']);

const x = 'vivo';
console.log('Vivo:', personaje[x]);

// Mas detalles

delete personaje.edad;
console.log( personaje );

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze( personaje );

personaje.dinero = 1000000000;
console.log( personaje );

const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );
console.log({propiedades, valores});



