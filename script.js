const ugiDOM = document.querySelector(".ugi input");
const svoriDOM = document.querySelector(".svori input");
const table2DOM = document.querySelector(".table2");
const kmiDOM = document.querySelector(".kmi");
const btnscaicioDOM = document.querySelector(".btnscaicio");
const btnclearDOM = document.querySelector(".clear");

function countKmi() {
    const ugi = parseFloat(ugiDOM.value);
    const svori = parseFloat(svoriDOM.value);
    
    let result = (svori / (ugi * ugi))*10000;
        
    let kmiClass = ' ';
           
    if(result > 0 && result < 18.5){
        kmiClass = "violet";
    }
    if(result > 18.5 && result < 25){
        kmiClass = "green";
    }
    if(result > 25 && result < 30){
        kmiClass = "blue";
    }
    if(result > 30 && result < 43){
        kmiClass = "red";
    }
   
    let HTML =  `<div id = "kmi" class="kmi ${kmiClass}">
                <p>KMI yra ${result}.</p>    
            </div>`;
            table2DOM.innerHTML = HTML; 
}

btnscaicioDOM.addEventListener("click", countKmi);

const clear = () => {
    table2DOM.innerHTML = `<div class="kmi"></div>`;
    
};
btnclearDOM.addEventListener("click", clear);


  

    