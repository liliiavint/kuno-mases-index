const nameDOM = document.querySelector(".name");
const ugiDOM = document.querySelector(".ugi");
const svoriDOM = document.querySelector(".svori");
const table2DOM = document.querySelector(".table2");
const kmi = document.getElementById(".kmi")
const btnscaicioDOM = document.querySelector(".btnscaicio");
const btnclearDOM = document.querySelector(".clear");

let HTML = ' ';
function countKmi() {
const names = nameDOM.value;
const svori = parseFloat(svoriDOM.value);
const ugi = parseFloat(ugiDOM.value);
const result = svori / ugi ;

    let kmiClass = ' ';
           
    if(result > 0 && result < 18.5){
        kmiClass = "violet";
    }
    if(result > 18.5 && result < 25){
        kmiClass = "green";
    }
    if(result > 0 && result < 18.5){
        kmiClass = "red";
    }
    if(result > 18.5 && result < 25){
        kmiClass = "blue";
    }
   
    let HTML =  `<div id = "kmi" class="kmi ${kmiClass}">
                <p>KMI ${names} yra ${result}.</p>    
            </div>`;
            table2DOM.innerHTML = HTML; 
}



btnscaicioDOM.addEventListener("click", countKmi)


const clear = () => table2DOM.innerHTML = `<div class="kmi">  </div>`;
btnclearDOM.addEventListener("click", clear);


  

    