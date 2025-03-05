let newGridSize = 16;
let rainbowMode = false;
let container = document.querySelector('.container');
let newGridButton = document.querySelector('#newGrid');
let rainbowButton = document.querySelector('#rainbow');
let gridResetButton = document.querySelector('#reset');

newGridButton.addEventListener('click', function(){
    container.innerHTML = "";
    let newGridSize = prompt("Enter new length for grid size, 1 to 100. (e.g. 64 will create a 64x64 grid):");
    if (newGridSize <= 100) {
        makeGrid(newGridSize, rainbowMode);
    } else if (newGridSize > 100) {
        alert("Alert: Grid size cannot be larger than 100x100")
    } else {
        makeGrid(16, rainbowMode);
    }
});

gridResetButton.addEventListener('click', function() {
    container.innerHTML = "";
    makeGrid(newGridSize, rainbowMode);
});

rainbowButton.addEventListener('click', function(){
    container.innerHTML = "";
    rainbowMode = !rainbowMode;
    if (rainbowMode == true){
        rainbowButton.style.background = 'linear-gradient(90deg,rgba(255, 0, 0, 1) 0%,rgba(255, 154, 0, 1) 10%,rgba(208, 222, 33, 1) 20%,rgba(79, 220, 74, 1) 30%,rgba(63, 218, 216, 1) 40%,rgba(47, 201, 226, 1) 50%,rgba(28, 127, 238, 1) 60%,rgba(95, 21, 242, 1) 70%,rgba(186, 12, 248, 1) 80%,rgba(251, 7, 217, 1) 90%,rgba(255, 0, 0, 1) 100%)';
    } else {
        rainbowButton.style.background = '';
    }
    makeGrid(newGridSize,rainbowMode);
});

function makeGrid(gridSize, rainbowToggle) {
    newGridSize = gridSize;
    //make sure square divs fit in container
    let side = 960 / gridSize;
    //create grid
    for (let i = 0; i < (gridSize*gridSize); i++) {
        let gridSquare = document.createElement('div');
        gridSquare.setAttribute('class', 'square');
        gridSquare.style.height = `${side}px`;
        gridSquare.style.width = `${side}px`;
        if (rainbowToggle == false) {
            gridSquare.addEventListener("mouseenter", function (e) {
                e.target.style.background = 'black';
            });
        } else if (rainbowToggle == true){
            gridSquare.addEventListener('mouseenter', function (e) {
                let redValue = Math.floor(Math.random() * 255);
                let greenValue = Math.floor(Math.random() * 255);
                let blueValue = Math.floor(Math.random() * 255);
                e.target.style.background = `rgb(${redValue},${greenValue},${blueValue})`;
            });
        }
        container.appendChild(gridSquare);
    }
}

function setColor(e) {
    e.target.style.background = 'black';
}


makeGrid(16, rainbowMode);