// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
    // prima prendiamo un riferimento al HTML
    const playButtonEasy = document.getElementById("play_game_easy");
    const playButtonMedium = document.getElementById("play_game_medium");
    const playButtonHard = document.getElementById("play_game_hard");
    // evento "click" per creare i quadrati in HTML
    playButtonEasy.addEventListener("click", addSquareEasy);   
    playButtonMedium.addEventListener("click", addSquareMedium);
    playButtonHard.addEventListener("click", addSquareHard);


// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// ! FUNCTIONS
// creamo una funzione che generi  x quadrati all'interno del contenitore dentro MAIN
function addSquareEasy () {

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

function addSquareMedium () {
        // facciamo un loop dove posso genereare 100 quadrati
        for (let i = 1; i <= 81; i++) {
            // Prima generiamo un solo elemento
            // prendiamo riferimento nel contaienr grande dentro Main
            const bigContainer = document.getElementById("container")
            
            // creamo un elemento div da mettere dentro
            const mediumSquare = document.createElement("div");
            
            // Ogni cella ha un numero progressivo, da 1 a 100.
            mediumSquare.innerText = i;
    
            // Ci saranno quindi 10 caselle per ognuna delle 10 righe.
            // gli diamo una classe 
            mediumSquare.classList.add("medium_square")
            
                mediumSquare.addEventListener("click", blueSquare);
    
    
            // appendiamo l'elemento creato dentro al div container
            bigContainer.append(mediumSquare);
    
            function blueSquare () {
                mediumSquare.classList.add("blue");
                console.log(mediumSquare.innerText);
            }
        }
}


function addSquareHard () {
    // facciamo un loop dove posso genereare 100 quadrati
    for (let i = 1; i <= 49; i++) {
        // Prima generiamo un solo elemento
        // prendiamo riferimento nel contaienr grande dentro Main
        const bigContainer = document.getElementById("container")
        
        // creamo un elemento div da mettere dentro
        const hardSquare = document.createElement("div");
        
        // Ogni cella ha un numero progressivo, da 1 a 100.
        hardSquare.innerText = i;

        // Ci saranno quindi 10 caselle per ognuna delle 10 righe.
        // gli diamo una classe 
        hardSquare.classList.add("hard_square")
        
        hardSquare.addEventListener("click", blueSquare);


        // appendiamo l'elemento creato dentro al div container
        bigContainer.append(hardSquare);

        function blueSquare () {
            hardSquare.classList.add("blue");
            console.log(hardSquare.innerText);
        }
    }
}


// if i = array item (che è stata generata casualmente (16 numeri)) allora pusha la classe su quel div (ovvero che al click diventa rosso)

let bombArr = [];

for (let i = 1; i <= 16; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    // console.log(randomNumber);
    bombArr.push(randomNumber);
    console.log(bombArr);

};

for (let i = 1; i <= 16; i++) {
    const pullValue = bombArr.splice(0, 1);
    console.log(pullValue);
};
console.log(bombArr);

if (bombArr === i) {
    littleSquare.classList.add("red")
}


