grid = document.querySelector(".grid")

let rowArray = [];

let size = prompt("How many number of square per side: (between: 0-100)");

while (size < 0 || size > 100){
    size = prompt("This number in not between [0-100]\nHow many number of square per side: (between: 0-100)");
}


// Creer une div row et la mettre dans un array
// Append les cases à cette ligne 
//Changer de row quand le nombre de case depasse size 

let row;
let cellule;
for (let i = 0; i < size**2; ++i){
    if ( i % size == 0){
        row = document.createElement("div");
        row.classList.add("row");
        rowArray.push(row);
        
    }
    cellule = document.createElement("div");
    cellule.classList.add("case");
   rowArray[rowArray.length - 1].appendChild(cellule);
    grid.appendChild(rowArray[rowArray.length - 1]);

}

let rows = document.getElementsByClassName("row");
console.log(rows);
grid.addEventListener("mouseover",(event)=>{
    console.log(event);
    console.log( event.target.classList.contains(".row"));
    if (event.target != grid ){
        event.target.classList.add("hoverColor");

    }
    
})



btn = document.querySelector("#resize");