const ugiDOM = document.querySelector(".ugi input");
const svoriDOM = document.querySelector(".svori input");
const table2DOM = document.querySelector(".table2");
const kmiDOM = document.querySelector(".kmi");
const btnscaicioDOM = document.querySelector(".btnscaicio");
const btnclearDOM = document.querySelector(".clear");




function countKmi() {
    const ugi = parseFloat(ugiDOM.value);
    const svori = parseFloat(svoriDOM.value);
    
    let result = ((svori / (ugi * ugi))*10000).toFixed(2);
        
    let kmiClass = ' ';
    if (ugiDOM === " " || svoriDOM === " "){
        table2DOM.innerHTML =  `<div id = "kmi" class="kmi">
        <p>Pateikite tinkamą  aukštį ir svoti!.</p> </div>`

    }
    
    else if (isNaN(parseFloat(ugiDOM.value)) || isNaN(parseFloat(svoriDOM.value))) {
        table2DOM.innerHTML = `<div id="kmi" class="kmi">
            <p>Pateikite galiojantį aukštį ir svorį!</p>
        </div>`;
    }else{
     if(result > 0 && result < 18.5){
        kmiClass = "violet";
    }else if(result > 18.5 && result < 25){
        kmiClass = "green";
    }else if(result > 25 && result < 30){
        kmiClass = "blue";
    }else if(result > 30 && result < Infinity){
        kmiClass = "red";
    }
   
    let HTML =  `<div id = "kmi" class="kmi ${kmiClass}">
                <p>KMI yra ${result}.</p>    
            </div>`;
            table2DOM.innerHTML = HTML; 
}
}
btnscaicioDOM.addEventListener("click", countKmi);

const clear = () => {
    table2DOM.innerHTML = `<div class="kmi"></div>`;
    document.querySelector(".ugi input").value = " "
    document.querySelector(".svori input").value = " "
    
};
btnclearDOM.addEventListener("click", clear);


  

    