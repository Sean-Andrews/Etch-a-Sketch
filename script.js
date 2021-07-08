const game = document.getElementById("game");

function makeGrid(rows, columns) {
    game.style.setProperty('--grid-rows', rows);
    game.style.setProperty('--grid-columns', columns);
    for (c = 0; c < (rows * columns); c++) {
        let cell = document.createElement('div');
        game.appendChild(cell).className = "grid-item";
    };
};

function randomBgColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}

makeGrid(20, 20);

const gridItem = document.querySelectorAll('.grid-item');
console.log(gridItem);

gridItem.forEach(function(grab) {
    grab.addEventListener('mouseover', event => {
        bgColor = randomBgColor(); 
        grab.style.backgroundColor = bgColor;
    });
});

