grid = document.querySelector(".grid")

let rowArray = [];
//Display the 16*16 grid at the beginning 
function display16(){
let row;
let cellule;
for (let i = 0; i < 16**2; ++i){
    if ( i % 16 == 0){
        row = document.createElement("div");
        row.classList.add("row");
        rowArray.push(row);
        
    }
    cellule = document.createElement("div");
    cellule.classList.add("case");
   rowArray[rowArray.length - 1].appendChild(cellule);
    grid.appendChild(rowArray[rowArray.length - 1]);

}
}


function erase(){
    for (rowInd = rowArray.length - 1; rowInd >= 0; rowInd--){
        console.log(rowArray[rowInd]);
        grid.removeChild(rowArray[rowInd]);
        rowArray.pop(rowArray[rowInd]);
    }
}

display16();


function grille(){
    erase();
let size = prompt("How many number of square per side: (between: 0-100)");

while (size < 0 || size > 100){
    size = prompt("This number in not between [0-100]\nHow many number of square per side: (between: 0-100)");
}

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

}

let rows = document.getElementsByClassName("row");
grid.addEventListener("mouseover",(event)=>{
    if (event.target != grid ){
        event.target.classList.add("hoverColor");

    }
    
})



btn = document.querySelector("#resize");
btn.addEventListener("click",grille);