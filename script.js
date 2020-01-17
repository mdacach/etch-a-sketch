const container = document.getElementById('container');

let numRows = 24;
container.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;
container.style.gridTemplateColumns = `repeat(${numRows}, 1fr)`; 

for (let col = 1; col <= numRows; col++){
    for (let row = 1; row <= numRows; row++){
        const div = document.createElement('div');
        div.classList.add('cell');
        div.style.cssText = `width: ${480/numRows}px`;
        div.style.cssText = `height: ${480/numRows}px`;
        container.appendChild(div);
    }
}

const cells = document.querySelectorAll(".cell");

// add the checking functions to all cells

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

clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', generateNewGrid);

function generateNewGrid () {
    newGridSize = prompt("new grid size: ");

    container.style.gridTemplateRows = `repeat(${newGridSize}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${newGridSize}, 1fr)`; 

    clearCells();
}

function clearCells () {
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











