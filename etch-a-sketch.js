const eas = document.querySelector('.eas')

//function that spawns a grid of divs for the etch-a-sketch-
function spawnGrid (number) {
    gridHeight = number;
    gridWidth = number;
    totalBoxes = number * number;
    for (let i = 0; i < totalBoxes; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        eas.appendChild(box);
    }
        //object with all the grids boxs
    const gridDivs = document.querySelector('.eas').children;


    for (var i = 0; i < gridDivs.length; i++) {
        gridDivs[i].addEventListener('mouseover', e => {
            let litBox = e.target;
            litBox.style.backgroundColor = 'black';
        });
    }
}

spawnGrid(16);

function clearGrid () {
    let border = document.querySelector('.eas');
    let squares = border.querySelectorAll('div');
    squares.forEach((div) => div.remove());
}




gridReset = document.querySelector('button');
gridReset.onclick = function reset(){
    let clickReset = prompt('Please enter a number between 1 and 100 to select the size of the Etch-A-Sketch', '16');
    let promptNumber = parseInt(clickReset);
    if (promptNumber !== promptNumber) {
        alert('Selection must be a number!');
    } else {
        if (promptNumber < 0 || promptNumber > 100) {
            alert('Number must be between 1 and 100');
        } else {
            clearGrid();
            eas.style.gridTemplateColumns = `repeat(${promptNumber}, 1fr)`;
            spawnGrid(promptNumber);
        }
    }
}

