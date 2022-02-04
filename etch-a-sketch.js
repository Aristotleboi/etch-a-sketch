const eas = document.querySelector('.eas')

//function that spawns a grid of divs for the etch-a-sketch-
function spawnGrid (number) {
    gridHeight = number;
    gridWidth = number;
    totalBoxes = number * number;
    for (let i = 0; i < totalBoxes; i++) {
        let box = document.createElement('div');
        box.setAttribute(`id`, `${i}`);
        box.textContent = `${i}`;
        eas.appendChild(box);
    }
}

spawnGrid(16);

//array with all the grids divs
const gridDivs = document.querySelector('.eas').children;

console.log(gridDivs);
console.log(gridDivs[0]);