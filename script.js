const game = document.getElementById("game");

function makeGrid(rows, columns) {
    game.style.setProperty('--grid-rows', rows);
    game.style.setProperty('--grid-columns', columns);
    for (c = 0; c < (rows * columns); c++) {
        let cell = document.createElement('div');
        game.appendChild(cell).className = "grid-item";
    };
};

makeGrid(30, 30);

const gridItem = document.querySelectorAll('.grid-item');
console.log(gridItem);

gridItem.forEach(function(grab) {
    grab.addEventListener('mouseover', function() {
        grab.style.backgroundColor = "black";
    });
});