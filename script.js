const container = document.getElementById('container');
const resizeBtn = document.getElementById('resize');
const clearBtn = document.getElementById('clear');
const colorAllBtn = document.getElementById('color-all');

clearBtn.addEventListener('click', clearCells);
resizeBtn.addEventListener('click', generateNewGrid);
colorAllBtn.addEventListener('click', colorAll);

// add the checking functions to all cells
function setupEventListeners() {
    const cells = document.querySelectorAll(".cell");    

    for (let i = 0; i < cells.length; i++){
        cell = cells[i];
        cell.addEventListener('mouseover', function (e) {
            if (!e.target.classList.contains('active')) { 
                e.target.classList.add('active');
                let rgb = generateRandomRGB();
                e.target.style.backgroundColor = rgb;
            }
        });
        cell.addEventListener('mouseout', function (e) {
            // e.target.classList.remove('active');
        });
    }
}

// remove all grid cells 
function removeCells () {
    let first = container.firstElementChild;
    while (first) {
        first.remove();
        first = container.firstElementChild;
    }
}

// clear color of all grid cells
function clearCells () {
    const cells = document.querySelectorAll(".cell");

    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove('active');
        cells[i].style.backgroundColor = 'aliceblue';
    }
}

// generate a new grid with user chosen size 
function generateNewGrid () {

    removeCells();
    clearCells();

    newGridSize = prompt("new grid size: ", 20);

    container.style.gridTemplateRows = `repeat(${newGridSize}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${newGridSize}, 1fr)`; 

    for (let col = 1; col <= newGridSize; col++){
        for (let row = 1; row <= newGridSize; row++){
            const div = document.createElement('div');
            div.classList.add('cell');
            container.appendChild(div);
        }
    }

    setupEventListeners();
}

// generate a new color for every cell when hovered
function generateRandomRGB () {
    let r = Math.random()*256;
    let g = Math.random()*256;
    let b = Math.random()*256;

    return `rgb(${r}, ${g}, ${b})`;
}

function colorAll () {
    const cells = document.querySelectorAll('.cell');

    for (let i = 0; i < cells.length; i++) {
        if (!cells[i].classList.contains('active')) { 
            cells[i].classList.add('active');
            let rgb = generateRandomRGB();
            cells[i].style.backgroundColor = rgb;
        }
    }    
}

generateNewGrid();







