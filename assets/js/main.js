console.log("test");

/* 
querySelector()
addEventListener()
let counter = 0;
createElement()
textContent()
appendChild()
classList

*/
// click 

const btn = document.querySelector("button");
console.log(btn);
btn.addEventListener("click", (e) => {
    ausfüren();
});

    // Element mit aufsteigender Nummer
    nummern = [];
for (let i = 1 ; i < 1001; i++) {
    console.log(i);
    nummern.push(i);
    console.log(nummern);  // [1], ... [1001]
}

// function
function ausfüren(e) {

    outputNummer = nummern.shift(); // holt sich erste [1]
    console.log(outputNummer);   
    console.log(nummern);

// ins HTML



};




