// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
    // prima prendiamo un riferimento al HTML
    const playButton = document.getElementById("play_game");

    // evento "click" per creare i quadrati in HTML
    playButton.addEventListener("click", addSquare);


// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// ! FUNCTIONS
// creamo una funzione che generi  x quadrati all'interno del contenitore dentro MAIN
function addSquare () {
    
    // facciamo un loop dove posso genereare 100 quadrati
    for (let i = 1; i <= 100; i++) {
        // Prima generiamo un solo elemento
        // prendiamo riferimento nel contaienr grande dentro Main
        const bigContainer = document.getElementById("container")
        
        // creamo un elemento div da mettere dentro
        const littleSquare = document.createElement("div");
        
        // Ogni cella ha un numero progressivo, da 1 a 100.
        littleSquare.innerText = i;

        // Ci saranno quindi 10 caselle per ognuna delle 10 righe.
        // gli diamo una classe 
        littleSquare.classList.add("little_square")
        
            littleSquare.addEventListener("click", blueSquare);


        // appendiamo l'elemento creato dentro al div container
        bigContainer.append(littleSquare);

        function blueSquare () {
            littleSquare.classList.add("blue");
            console.log(littleSquare.innerText);
        }
    }
    
}
