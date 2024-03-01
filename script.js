const nameDOM = document.querySelector(".name");
const ugiDOM = document.querySelector(".ugi");
const svoriDOM = document.querySelector(".svori");
const btnscaicioDOM = document.querySelector(".btnscaicio");
const kmiDOM = document.querySelector(".kmi");
const table2DOM = document.querySelector(".table2");
const btnclearDOM = document.querySelector(".clear");

function countKmi() {
    const names = nameDOM.value;
    const svori = parseFloat(svoriDOM.value);
    const ugi = parseFloat(ugiDOM.value);
    const result = svori / Math.pow(ugi / 100, 2);

    const HTML = `
    <div class="kmi">
        <p>KMI ${names} yra ${result.toFixed(2)}.</p>    
        <button class="clear">Clear</button>
    </div>`;
    table2DOM.innerHTML += HTML;
}


btnscaicioDOM.addEventListener("click", countKmi);
function clear(){
    
}


  

    