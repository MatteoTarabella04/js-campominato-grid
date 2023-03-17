/* 
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/


/* steps
-richiamo il bottone
-creo l'evento
-aggiungo le celle
*/

// richiamo il bottone dal DOM
const playButtonElement = document.getElementById('play_btn');

// richiamo il contenitore dove andranno aggiunte le celle
const containerElement = document.querySelector('.container');

// creo l'evento per il bottone che genera le celle
playButtonElement.addEventListener('click', function(){

   for (let i = 1; i <= 100; i++){
      const markupEl = `<div class="cell">${i}</div>`

      containerElement.insertAdjacentHTML('beforeend', markupEl);
   }
})