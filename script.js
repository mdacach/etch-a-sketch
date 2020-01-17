const container = document.getElementById('container');


const div = document.createElement('div');

for (let col = 1; col <= 16; col++){
    for (let row = 1; row <= 16; row++){
        const div = document.createElement('div');
        div.classList.add('cell');
        container.appendChild(div);
    }
    const br = document.createElement('br');
    container.appendChild(br);
}

const cells = document.querySelectorAll(".cell");

// add the checking functions to all cells

for (let i = 0; i < cells.length; i++){
    cell = cells[i];
    cell.addEventListener('mouseover', function (e) {
       e.target.classList.add('active');
    });
    cell.addEventListener('mouseout', function (e) {
        // e.target.classList.remove('active');
    });
}

// events for hovering 
    // onmouseover
    // onmouseout