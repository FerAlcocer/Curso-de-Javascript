// // import { buscarHeroe, buscarHeroeAsync } from "./js/promesas";
// // // import { promesaLenta, promesaMedia, promesaRapida } from "./js/promesas";


// // // promesaLenta.then( console.log );
// // // promesaMedia.then( console.log );
// // // promesaRapida.then( console.log );

// // // Promise.race([ promesaLenta, promesaMedia, promesaRapida ])
// // //         .then( console.log )
// // //         .catch( console.log );

// // buscarHeroe( 'capi2' )
// //         .then( heroe => console.log(heroe) )
// //         .catch( console.warn ); 

// // buscarHeroeAsync( 'iron2' )
// //         .then( heroe => console.log(heroe) )
// //         .catch( console.warn ); 

// import { obtenerHeroesArr, obtenerHeroeAwait } from "./js/await";

// console.time('await');

// obtenerHeroeAwait('capi2')
//     .then( heroe =>{
//     console.log( heroe );

//     console.timeEnd('await');

// }).catch( console.warn );

import { heroesCiclo, heroeIfAwait } from './js/await';

heroesCiclo();

heroeIfAwait('iron');