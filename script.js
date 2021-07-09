// Create a game grid of divs 

const gameBoard = document.getElementById('game');

let num = 10;
makeGrid(num, num);

function makeGrid(rows, cols) {
    gameBoard.style.setProperty('--grid-rows', rows);
    gameBoard.style.setProperty('--grid-cols', cols);
    for (let i=0; i < rows * cols; i++) {
        let cell = document.createElement('div');
        gameBoard.appendChild(cell).className = 'square';
    };
    colorGrid();
};

// Change color of each div in game grid on mouse hover
function colorGrid(){
const box = document.querySelectorAll('.square');

box.forEach((pixel) => {
    pixel.addEventListener('mouseover', event => {
        pixel.style.backgroundColor = document.getElementById('color').value;
    });
});
}

// Create button to reset board and input new grid

const resetBtn = document.getElementById('clear');

resetBtn.addEventListener('click', event => {
    resetBoard();
});

function resetBoard() {
    let num = prompt("Pick a number between and 64: ");
        if (num > 64) {
            alert("That number was too high");
            resetBoard();
        } else if (num < 1) {
            alert("That number was too low");
            resetBoard();
        } else {
            while (gameBoard.firstChild) {
                gameBoard.removeChild(gameBoard.firstChild);
            }
            makeGrid(num, num);
        }            
}
// Create button to randomize color of sketch
