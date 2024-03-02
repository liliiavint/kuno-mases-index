const ugiDOM = document.querySelector(".ugi input");
const svoriDOM = document.querySelector(".svori input");
const wordDOM = document.querySelector(".word");
const klaidaDOM = document.querySelector(".klaida");
const btnscaicioDOM = document.querySelector(".btnscaicio");
const btnclearDOM = document.querySelector(".clear");




function countKmi() {
    const ugi = parseFloat(ugiDOM.value);
    const svori = parseFloat(svoriDOM.value);
    
    let result = ((svori / (ugi * ugi))*10000).toFixed(2);
        
    let HTML = ' ';
    if (ugiDOM === " " || svoriDOM === " "){
        klaidaDOM.innerHTML =  `<p>Pateikite tinkamą  aukštį ir svoti!.</p>`

    }
    
    else if (isNaN(parseFloat(ugiDOM.value)) || isNaN(parseFloat(svoriDOM.value))) {
        klaidaDOM.innerHTML = `<p>Pateikite galiojantį aukštį ir svorį!</p>`;
    }else{
     if(result > 0 && result < 18.5){
        HTML = `<p class=".blue">Nepakankamas </br>svoris</p> `;
    }else if(result > 18.5 && result < 25){
        HTML = `<p class="green">Sveikas svoris</p>`;
    }else if(result > 25 && result < 30){
        HTML = `<p class="yellow">Antsvoris</p>`;
    }else if(result > 30 && result < Infinity){
        HTML = `<p class="red">Nutukimas</p>`;
    }
    let HTML2 =  `<p>KMI yra ${result}.</p>`
            
            wordDOM.innerHTML = HTML; 
            klaidaDOM.innerHTML = HTML2
}
}
btnscaicioDOM.addEventListener("click", countKmi);

const clear = () => {
    document.querySelector(".ugi input").value = " "
    document.querySelector(".svori input").value = " "
    klaidaDOM.innerHTML =  `<p>  </p>`;
    wordDOM.innerHTML = `<p>  </p>`;
    
};
btnclearDOM.addEventListener("click", clear);


  

    