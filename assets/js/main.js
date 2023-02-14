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

const btn = document.querySelector("button");
console.log(btn);

const outputField = document.querySelector("div");



/************************************************************************************************
 *      
 *                       Ende  Variablen
 * 
 ***********************************************************************************************/




// click 
btn.addEventListener("click", (e) => {
    ausfüren(e);
});

// Element mit aufsteigender Nummer
nummern = [];
for (let i = 0; i < 1001; i++) {
    console.log(i);
    nummern.push(i);
    console.log(nummern);  // [0], ... [1001]
}

// function
function ausfüren(e) {


    outputNummer = nummern.shift(); // holt sich erste [1]
    console.log(outputNummer);
    console.log(nummern);


    // HTML Element erzeugen
    const pTag = document.createElement("p");
    console.log(pTag);

    // Element Text zuweisen
    pTag.textContent = outputNummer;
    console.log(pTag);


    // ins HTML
    //  outputField.appendChild(pTag);

    // davor css Style verpassen
    // 0 + alle 10er rund = .weiß     der rest rechteck = .rechteck
    if (outputNummer === 0) { // 0 
        console.log("0 ")
        pTag.classList.add("rechteck");
        pTag.classList.add("weiss");
    }
    else if (outputNummer % 10 == 0) {   // oder durch 10 Teilbar und Null Rest
        console.log(" 10er")
        pTag.classList.add("rechteck");
        pTag.classList.add("weiss");
    }
    else {
        console.log("1-9er")
        pTag.classList.add("rechteck");

    }


    // ins HTML
    outputField.appendChild(pTag);

};




