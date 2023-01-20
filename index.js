function start() {    
    dimension = +window.prompt("Enter a number for the Grid size");
    
    while (isNaN(dimension)) {
        dimension = +window.prompt("Please enter a valid number");
    }

    createGrid();
}

function createGrid() {
    createRows();
}

function createRows() {
    const frame = document.querySelector(".frame");

    for (let i = 0; i < dimension; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        fillRow(row);

        frame.appendChild(row);
    }

}

function fillRow(row) {
    for (let i = 0; i < dimension; i++) {
        let item = document.createElement("div");
        item.classList.add("item");

        row.appendChild(item);
    }
}

var dimension;
start();