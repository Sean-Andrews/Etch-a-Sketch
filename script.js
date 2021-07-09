// Create a game grid of divs 

const gameBoard = document.getElementById('game');

function makeGrid(rows, cols) {
    gameBoard.style.setProperty('--grid-rows', rows);
    gameBoard.style.setProperty('--grid-cols', cols);
    for (let i=0; i < rows * cols; i++) {
        let cell = document.createElement('div');
        gameBoard.appendChild(cell).className = 'square'
    };
};

makeGrid(16, 16);

// Change color of each div in game grid

// Create button to reset board and input new grid

// Create button to change color of sketch
