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
    for(let i = 0; i < boxesPerSide**2; i++){
        const block = document.createElement("div");

        block.classList.add("block");
        grid.appendChild(block);
    }
}

createGrid();

const gridBtn = document.getElementById("gridBtn");
const clearBtn = document.getElementById("clearBtn");

// ClearBtn event
clearBtn.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".block");
    for(const box of boxes){
        box.style.removeProperty("background-color");
    }
});

// gridBtn Event
gridBtn.addEventListener("click", () => {
    const input = Number(prompt("Select boxes per side (min 1, max 100): "));

    if (Number.isInteger(input) && input > 0 && input <= 100) {
        dropGrid();
        createGrid(input);
    } else {
        alert("You can create a grid with 1 to 100 boxes per side.");
    }
});


// Drawing logic shared by mouse, touch and pen
let isDrawing = false;
let activePointerId = null;
let lastPaintedBlock = null;

function paintAt(x, y) {
    const element = document.elementFromPoint(x, y);

    if (element?.classList.contains("block") && element !== lastPaintedBlock) {
        element.style.backgroundColor = randomHexColor();
        lastPaintedBlock = element;
    }
}

grid.addEventListener("pointerdown", (event) => {
    // On desktop, draw only with the primary (left) mouse button.
    if (!event.isPrimary || (event.pointerType === "mouse" && event.button !== 0)) {
        return;
    }

    isDrawing = true;
    activePointerId = event.pointerId;
    lastPaintedBlock = null;

    grid.setPointerCapture(event.pointerId);
    paintAt(event.clientX, event.clientY);
});

grid.addEventListener("pointermove", (event) => {
    if (!isDrawing || event.pointerId !== activePointerId) {
        return;
    }

    paintAt(event.clientX, event.clientY);
});

function stopDrawing(event) {
    if (event.pointerId !== activePointerId) {
        return;
    }

    isDrawing = false;
    activePointerId = null;
    lastPaintedBlock = null;
}

grid.addEventListener("pointerup", stopDrawing);
grid.addEventListener("pointercancel", stopDrawing);
