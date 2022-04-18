const miModulo = (() =>{
    'use strict'

        
    let deck         = [];
    const tipos      = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'K', 'Q'];

    let puntosJugadores = [];

    // Referencias del HTML
    const btnNuevo    = document.querySelector('#btnNuevo'),
          btnDetener  = document.querySelector('#btnDetener'),
          btnPedir    = document.querySelector('#btnPedir');


    const divCartasJugadores   = document.querySelectorAll('.divCartas'),
          puntosHTML         = document.querySelectorAll('small');

    // Esta funcion inicializa el juego

    const inicializarJuego = (numJugadores = 1) =>{
          deck = crearDeck();

          puntosJugadores = [];
          for(let i = 0 ; i<= numJugadores; i++ ){
            puntosJugadores.push(0);
        }
        
        puntosHTML.forEach( elem =>elem.innerText = 0 );
        divCartasJugadores.forEach( elem => elem.innerHTML = '' ); 

        btnPedir.disabled = false;
        btnDetener.disabled = false;

    }

    const crearDeck = () =>{
        deck = [];
    for( let i = 2; i <=10; i++){
        for(let tipo of tipos){
            deck.push(i + tipo);
        }
    }

    for(let tipo of tipos){
        for( let especial of especiales){
        deck.push(especial + tipo);
        }
    }

    return _.shuffle(deck);
    }

    // Esta funcion me permite tomar una carta
    const pedirCarta = () => {

        if ( deck.lenght === 0 ) {
            throw 'No hay mas cartas en el deck';
        }
        return deck.shift();
    }

    const valorCarta = (carta) => { 

        const valor = carta.substring(0, carta.length -1);
        return ( isNaN(valor) ) ?
                (valor === 'A' )? 11 : 10
                : valor * 1;
        };



    const acumularPuntos = (carta, turno) => {
        
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];    
    }

    
    const crearCarta = ( carta, turno) => {

        const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${ carta }.png`;
            imgCarta.classList.add('carta');
            divCartasJugadores[turno].append( imgCarta );

    }
    
    const determinarGanador = () => {

        const [puntosMinimos, puntosComputadora] = puntosJugadores;
        setTimeout(() => {
            if( puntosComputadora === puntosMinimos ) {
                alert('Empataron');
            } else if ( puntosMinimos > 21 ) {
                alert('Lo siento mucho, perdiste');
            } else if ( puntosComputadora > 21 ) {
                alert('Jugador Gana');
            } else {
                alert('La computadora gano');
            }
        }, 100 );
            
    }
        // Turno de la computadora

    const turnoComputadora = ( puntosMinimos ) => {

        let puntosComputadora= 0;

    do{
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length -1);
            crearCarta( carta, puntosJugadores.length -1 );
            
        }while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21)){

        determinarGanador();
    }};

    // Eventos

    btnNuevo.addEventListener('click', () => {
        
        inicializarJuego();
    
    })

    btnPedir.addEventListener('click', () => {

    const carta         = pedirCarta();
    const puntosJugador = acumularPuntos(carta, 0);
       
    crearCarta( carta, 0 );

    if( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );
        
    }else if( puntosJugador === 21 ){
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        console.warn('21, Ganaste!');
        turnoComputadora( puntosJugador );
        
    }
    });


    btnDetener.addEventListener('click', () => {
      
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        
        turnoComputadora( puntosJugadores [0] );
    });
   
    return 'Hola Mundo';
})();
 