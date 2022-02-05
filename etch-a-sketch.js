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
}

spawnGrid(16);

//object with all the grids boxs
const gridDivs = document.querySelector('.eas').children;


for (var i = 0; i < gridDivs.length; i++) {
    gridDivs[i].addEventListener('mouseover', e => {
        let litBox = e.target;
        litBox.style.backgroundColor = 'black';
    });
}





//document.addEventListener("mouseover", e => {
    //if (e.target.matches(".box")) {
       // console.log(e.target)
        //let litBox = e.target;
       // litBox.setAttribute('id', 'litBox')
       // eas.appendChild(litBox);
       // console.log('hi');
  //  }
//})




