grid = document.querySelector(".grid")

let list = [];


for (let i = 0; i < 256; ++i){
    list.push(document.createElement("div"));
    list[i].classList.add("case");
    grid.appendChild(list[i]);

}

grid.addEventListener("mouseover",(event)=>{
    if (event.target != grid){
        event.target.classList.add("hoverColor");

    }
    
})