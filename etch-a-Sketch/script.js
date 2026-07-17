const grid = document.getElementById("grid");

const randomHexColor = () => {
    // Generate a random 24-bit number and convert to hex
    const hex = Math.floor(Math.random() * 0xffffff).toString(16);
    // Pad with zeros if necessary and prepend '#'
    return '#' + hex.padStart(6, '0');
};

function dropGrid() {
    while (grid.firstElementChild) {
        grid.firstElementChild.remove();
    }
}

function createGrid(boxesPerSide = 16){
    grid.style.setProperty("--grid-size", boxesPerSide);
    // const boxDimention = 960 / boxesPerSide;
    for(let i = 0; i < boxesPerSide**2; i++){
        const block = document.createElement("div");
        // block.style.width = boxDimention + "px";
        // block.style.height = boxDimention + "px";
        block.classList.add("block");
        grid.appendChild(block);

        // logic for hovering
        block.addEventListener('mouseenter', () => {
            block.style.backgroundColor = randomHexColor();
        });
    }
}

createGrid();

const gridBtn = document.getElementById("gridBtn");
const clearBtn = document.getElementById("clearBtn");

// ClearBtn event
clearBtn.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".block");
    for(const box of boxes){
        box.style.removeProperty("background-color")
    }
});

gridBtn.addEventListener("click", () => {
    const input = Number(prompt("Seleziona le box per lato: "));

    if (Number.isInteger(input) && input > 0 && input <= 100) {
        dropGrid();
        createGrid(input);
    } else {
        alert("Puoi creare una griglia da 1 a 100 box per lato");
    }
});   