const button = document.getElementById('random-btn');
const boxes = document.querySelectorAll('.container div');

const shapes = [
    "square-circle-1",
    "square-circle-2",
    "square-circle-3",
    "square-circle-4",
    "triangle-1",
    "triangle-2",
    "triangle-3",
    "triangle-4",
    "circle"
]

const colors = ["#01d2fd", "#ffc700", "#fe9f12", "#06d0c7"]

const generatePattern = () => {
    boxes.forEach(box => {
        box.className = "";
        let i = Math.floor(Math.random() * shapes.length);
        let j = Math.floor(Math.random() * colors.length);
        box.classList.add(shapes[i]);
        box.style.backgroundColor = colors[j];
    })
}

button.addEventListener('click', generatePattern);
window.onload = generatePattern;