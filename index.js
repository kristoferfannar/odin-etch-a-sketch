function changeDimension() {
    const input = document.querySelector("input");
    let dimensionText = +input.value;
    console.log(input.value);
    
    if (isNaN(dimensionText) || dimensionText < 1 || dimensionText > 100) {
        alert("Please enter a number between 1 and 100");
    } else {
        dimension = +dimensionText;
        input.value = "";
        removeGrid();
        createGrid();
    }
}

function removeGrid() {
    const frame = document.querySelector(".frame");
    frame.innerHTML = "";
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
    makeBlocksClickable();
}

function makeBlocksClickable() {
    const blocks = document.querySelectorAll(".item");
    blocks.forEach(block => block.addEventListener('mouseover', () => {click(block)}) );
}

function fillRow(row) {
    for (let i = 0; i < dimension; i++) {
        let item = document.createElement("div");
        item.classList.add("item");

        row.appendChild(item);
    }
}

function click(block) {
    block.classList.toggle("clicked");
}


function clearGrid() {
    let blocks = document.querySelectorAll(".item");
    blocks.forEach(block => block.classList.remove("clicked"));
}



var dimension = 16;
createGrid();

const clear = document.querySelector(".clear");
clear.addEventListener('click', () => {clearGrid(clear)});

const enter = document.querySelector(".submit");
enter.addEventListener('click', () => {changeDimension()});