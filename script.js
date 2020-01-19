const container = document.getElementById('container');

const cells = document.querySelectorAll(".cell");

// add the checking functions to all cells

function setupEventListeners() {
    const cells = document.querySelectorAll(".cell");    

    for (let i = 0; i < cells.length; i++){
        cell = cells[i];
        cell.addEventListener('mouseover', function (e) {
            if (e.target.classList.contains('active')) return; 
            e.target.classList.add('active');
            let rgb = generateRandomRGB();
            e.target.style.backgroundColor = rgb;
        });
        cell.addEventListener('mouseout', function (e) {
            // e.target.classList.remove('active');
        });
    }
}

clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', generateNewGrid);

function removeCells () {
    let first = container.firstElementChild;
    while (first) {
        first.remove();
        first = container.firstElementChild;
    }
}

function generateNewGrid () {
    removeCells();
    clearCells();

    // newGridSize = prompt("new grid size: ", 30);
    newGridSize = 20;

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

function clearCells () {
    let cells = document.querySelectorAll(".cell");

    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove('active');
        cells[i].style.backgroundColor = 'white';
    }
}

// generate a new color for every hover
function generateRandomRGB () {
    let r = Math.random()*256;
    let g = Math.random()*256;
    let b = Math.random()*256;

    return `rgb(${r}, ${g}, ${b})`;
}

generateNewGrid();







