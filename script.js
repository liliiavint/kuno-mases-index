const nameDOM = document.querySelector(".name");
const ugiDOM = document.querySelector(".ugi");
const svoriDOM = document.querySelector(".svori");
const btnscaicioDOM = document.querySelector(".btnscaicio");
const kmiDOM = document.querySelector(".kmi");
const table2DOM = document.querySelector(".table2");
const btnclearDOM = document.querySelector(".clear");
let HTML = '';
function countKmi() {
    const names = nameDOM.value;
    const svori = parseFloat(svoriDOM.value);
    const ugi = parseFloat(ugiDOM.value);
    const result = svori / Math.pow(ugi / 100, 2);
    if(result > 33){
        table2DOM.innerHTML = `
        <div class="kmi red">
            <p>KMI ${names} yra ${result.toFixed(2)}.</p>    
            
        </div>`
    }
    if(result < 33){
       table2DOM.innerHTML = `
        <div class="kmi green">
            <p>KMI ${names} yra ${result.toFixed(2)}.</p>    
            
        </div>`
    }
  
 
}


btnscaicioDOM.addEventListener("click", function(){
countKmi()

    
       
    })
const clear = ()=> table2DOM.innerHTML = `<div class="kmi">  </div>`;

btnclearDOM.addEventListener("click", clear);


  

    