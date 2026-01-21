grid = document.querySelector(".grid")

let rowArray = [];

let size = prompt("How many number of square per side:");



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



grid.addEventListener("mouseover",(event)=>{
    if (event.target != grid){
        event.target.classList.add("hoverColor");

    }
    
})


// const size = prompt("Choose the number of square per side: ");

// for (let i = 255; i > 0; --i){
//     grid.removeChild(list[i]);
//     list.pop(list[i]);
// }

// for (let i = 0; i < size**2; ++i){
//     list.push(document.createElement("div"));
//     list[i].classList.add("case");

//     grid.appendChild(list[i]);

// }



// Modifier le nombre de carré par côté sans modifier la taille de pixel occupée
// Donc so le nombre de carré augmente le taille doit diminuer 
// Si le nombre de carré diminue leur taille doit augementer 
// 
