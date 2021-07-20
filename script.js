// Initial variables

const gameBoard = document.getElementById('game');
let randomColor;
let num = 16;
const randomize = document.getElementById('randomize');
const resetBtn = document.getElementById('clear');
let mouseDown = false;

// Resets the board when user presses the 'clear' button

resetBtn.addEventListener('click', event => {
    resetBoard();
});

// Randomizes the color when user presses the 'Wild Colors!' button

randomize.addEventListener('click', event => {
    randomColor = true;
    colorGrid();
});

// Initial setup of grid

makeGrid(num, num);

// Function to create the grid and call color function

function makeGrid(rows, cols) {
    gameBoard.style.setProperty('--grid-rows', rows);
    gameBoard.style.setProperty('--grid-cols', cols);
    for (let i=0; i < rows * cols; i++) {
        let cell = document.createElement('div');
        gameBoard.appendChild(cell).className = 'square';
    };
    colorGrid();
};

// Function to change color of sketch

function colorGrid(){
    let box = document.querySelectorAll('.square');
        if (randomColor === true) {
           wildColor();
        } else {
                box.forEach((pixel) => {
                pixel.addEventListener('mousedown', () => mouseDown = true);
                pixel.addEventListener('mouseover', event => {
                    if (mouseDown) {
                        pixel.style.backgroundColor = document.getElementById('color').value;
                    }
                pixel.addEventListener('mouseup', () => mouseDown = false); 
            });
        });    
        };
    }

// Function to reset the board based on user input

function resetBoard() {
    let num = prompt("Pick a number between and 64: ");
        while (gameBoard.firstChild) {
        gameBoard.removeChild(gameBoard.firstChild);
        }
        if (num > 64) {
            alert("That number was too high");
            resetBoard();
        } else if (num < 1) {
            alert("That number was too low");
            resetBoard();
        } else {
            let box = document.querySelectorAll('.square');
            randomColor = false;
            box.forEach((pixel) => {
                pixel.addEventListener('click', event => {
                    pixel.style.backgroundColor = 'black';
                })
            });
            makeGrid(num, num);
        };            
};

//Function 1 of 2 to set up randomizing color

function wildColor() {
    let box = document.querySelectorAll('.square');
    box.forEach((pixel) => {
        pixel.addEventListener('mousedown', () => mouseDown = true);
        pixel.addEventListener('mouseover', event => {
            if (mouseDown) {
                pixel.style.backgroundColor = pixelColor();
            }
        })
        pixel.addEventListener('mouseup', () => mouseDown = false);
    })
}

// Function 2 of 2 to choose the pixel color at random

function pixelColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}



