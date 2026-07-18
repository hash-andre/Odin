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
const rainbowBtn = document.getElementById("rainbowBtn");
const drawBtn = document.getElementById("drawBtn");
let rainbowActive = false;
let drawActive = false;

function updateModeButtons() {
    rainbowBtn.classList.toggle("active", rainbowActive);
    drawBtn.classList.toggle("active", drawActive);

    rainbowBtn.setAttribute("aria-pressed", rainbowActive);
    drawBtn.setAttribute("aria-pressed", drawActive);
}

function resetDarkness(element) {
    element.style.removeProperty("opacity");
    delete element.dataset.darkness;
}

function darkenBlock(element) {
    const currentLevel = Number(element.dataset.darkness) || 0;
    const nextLevel = Math.min(currentLevel + 1, 10);

    element.dataset.darkness = nextLevel;
    element.style.backgroundColor = "#000";
    element.style.opacity = nextLevel / 10;
}

// ClearBtn event
clearBtn.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".block");
    for(const box of boxes){
        box.style.removeProperty("background-color");
        resetDarkness(box);
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

// rainbowBtn event
rainbowBtn.addEventListener("click", () =>{
    rainbowActive = !rainbowActive;
    drawActive = false;
    updateModeButtons();
});

// drawActive event
drawBtn.addEventListener("click", () =>{
    drawActive = !drawActive;
    rainbowActive = false;
    updateModeButtons();
});


// Drawing logic shared by mouse, touch and pen
let isDrawing = false;
let activePointerId = null;
let lastPaintedBlock = null;

function paintAt(x, y) {
    const element = document.elementFromPoint(x, y);

    if (element?.classList.contains("block") && element !== lastPaintedBlock) {
        if(rainbowActive){
            resetDarkness(element);
            element.style.backgroundColor = randomHexColor();
        }
        else if(drawActive){
            darkenBlock(element);
        }
        else{
            resetDarkness(element);
            element.style.backgroundColor = "rgb(20 20 20 / 85%)";
        }

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
