

function multiColors(){
    let color="#"
    for(let i=0; i<6; i++){ //6 caractères pour une couleur (ex: #FFFFFF)
        color+=hexaD [Math.floor(Math.random()*16)] // génère un nombre aléatoire entre 0 et 16
    }
    return color
}

const box= document.createElement("div") 
box.classList.add("box") 

const container= document.querySelector("#container") 

const hexaD=[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"]

let max=0

window.addEventListener("keydown", function (event){ 
    switch(event.key){ 
        case "ArrowDown":
        if(max<225){
            let newbox=box.cloneNode() 
            newbox.style.backgroundColor=multiColors()
            container.appendChild(newbox) 
            max++
        } else{
            container.querySelectorAll(".box").forEach(function(newbox){
                newbox.addEventListener("click", function(box){
                    newbox.style.backgroundColor="black"
                })
            })
        }
        break
        
        case "ArrowUp":
        container.lastChild.remove() //container.lastChild sélectionne le dernier enfant de container
        max--
        
    }
})