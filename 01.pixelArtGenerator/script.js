let container = document.querySelector(".container");
let gridButton = document.getElementById("submit-grid");
let clearGridButton = document.getElementById("clear-grid");
let gridWidth = document.getElementById("width-range");
let gridHeight = document.getElementById("height-range");
let colorButton = document.getElementById("color-input");
let eraseBtn = document.getElementById("erase-btn");
let paintBtn = document.getElementById("paint-btn");
let widthValue = document.getElementById("width-value");
let heightValue = document.getElementById("height-value");

let events = {
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup",
    },
    touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend",
    },
}

let deviceType = "";

let draw = false;
let erase = false;

const isTouchDevice = () => {
    try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true
    } catch (e) {
        deviceType = "mouse";
        return false
    }
};

isTouchDevice();

gridButton.addEventListener("click", () => {
    toggleMode()
    container.innerHTML = "";
    let count = 0;
    console.log("Hello")
    for (let i = 0; i < gridHeight.value; i++) {
        console.log("Peace, hello")
        count += 2;
        let row = document.createElement("div");
        row.classList.add("gridRow")
        
        for (let j = 0; j < gridWidth.value; j++) {
            console.log("HELlo")
            count += 2;
            let col = document.createElement("div");
            col.classList.add("gridCol");
            col.setAttribute("id", `gridCol${count}`);
            col.addEventListener(events[deviceType].down, () => {
                draw = true;
                if (erase) {
                    col.style.backgroundColor = "transparent";
                } else {
                    col.style.backgroundColor = colorButton.value;
                }
            });

            col.addEventListener(events[deviceType].move, (e) => {
                // console.log(e.clientX)
                let elementID = document.elementFromPoint(
                    !isTouchDevice() ? e.clientX : e.touches[0].clientX,
                    !isTouchDevice() ? e.clientY : e.touches[0].clientY
                ).id;
                checker(elementID)
            })

            col.addEventListener(events[deviceType].up, () => {
                draw = false;
            })

            row.appendChild(col)
        }

        container.appendChild(row)
    }

});

function checker(elementId) {
    let gridColumns = document.querySelectorAll(".gridCol");
    gridColumns.forEach((element) => {
        if (elementId == element.id) {
            if (draw && !erase) {
                element.style.backgroundColor = colorButton.value;
            } else if (draw && erase) {
                element.style.backgroundColor = "transparent";
            }
        }
    });
};

clearGridButton.addEventListener("click", () => {
    container.innerHTML = "";
});

eraseBtn.addEventListener("click", () => {
    erase = true;
    toggleMode();
});

paintBtn.addEventListener("click", () => {
    erase = false;
    toggleMode();
});

gridWidth.addEventListener("input", () => {
    widthValue.innerHTML = gridWidth.value < 9 ? `0${gridWidth.value}` : gridWidth.value;
});

gridHeight.addEventListener("input", () => {
    heightValue.innerHTML = gridHeight.value < 9 ? `0${gridHeight.value}` : gridHeight.value;
});

const toggleMode = () => {
    if (erase) {
        eraseBtn.style.border = "2px solid #000";
        paintBtn.style.border = "none";
    } else {
        paintBtn.style.border = "2px solid #000";
        eraseBtn.style.border = "none";
    }
}

window.onload = () => {
    gridHeight.value = 0;
    gridWidth.value = 0;
}