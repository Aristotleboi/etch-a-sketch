const eas = document.querySelector('.eas')

//function that spawns a grid of divs for the etch-a-sketch-
function spawnGrid (number) {
    gridHeight = number;
    gridWidth = number;
    totalBoxes = number * number;
    for (let i = 0; i < totalBoxes; i++) {
        let box = document.createElement('div');
        box.setAttribute(`id`, `${i}`);
        box.classList.add('box');
        box.textContent = `${i}`;
        eas.appendChild(box);
    }
}

spawnGrid(16);

document.addEventListener("mouseover", e => {
    if (e.target.matches(".box")) {
        console.log(e)
    }
})




//array with all the grids divs
//commented out for the moment. found another way to mouseover
//const gridDivs = document.querySelector('.eas').children;
//console.log(gridDivs);
//console.log(typeof gridDivs);
//console.log(gridDivs[0]);