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
    // erase the already there grid
    erase();
    //take number of case per side by the user 
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


// function randomColorNumber(){
//     return Math.floor(Math.random()*256);
// }



//Creer une référence a colors
// je mets un capteur au niveau de colors 
// grace au bubbling je sais quel bouton a appuyé
// si mon element a l'id vert je modifie red green blue pour faire du vert


let red;
let green;
let blue;


let colors = document.querySelector(".features");
colors.addEventListener("click",(event)=>{
    let id = event.target.getAttribute("id");
    if (id == "red"){
        red = 255;
        green = 0;
        blue = 0;
    }
    if (id == "blue"){
        red = 0;
        green = 0;
        blue = 255;
    }
    if (id == "green"){
        red = 40;
        green = 114;
        blue = 51;
    }

     if (id == "purple"){
        red = 160;
        green = 32;
        blue = 240;
    }
    if (id == "yellow"){
        red = 253;
        green = 216;
        blue = 8;
    }
    if (id == "orange"){
        red = 255;
        green = 128;
        blue = 0;
    }
    if (id == "pink"){
        red = 251;
        green = 116;
        blue = 168;
    }
    if (id == "grey"){
        red = 123;
        green = 123;
        blue = 125;
    }
    if (id == "black"){
        red = 0;
        green = 0;
        blue = 0;
    }
    if (id == "eraser"){
        red = 255;
        green = 255;
        blue = 255
    }
})

// SI une touchee est maintenue, je veux que l'event ne se répande plus

let drawing = 0;
//focus thingy
document.addEventListener("keydown",()=>{
    drawing = 1
  
})

document.addEventListener("keyup",()=>{
    drawing = 0;
})

grid.addEventListener("mouseover",(event)=>{
          
    if (event.target != grid ){
        // event.target.classList.add("hoverColor");
        if (drawing == 1){
            event.target.style.cssText=`background-color:rgb(${red}, ${green}, ${blue})`;


        }

       
        
    }
    
})



btn = document.querySelector("#resize");
btn.addEventListener("click",grille);