let ratioWidth = document.getElementById("ratio-width");
let ratioHeight = document.getElementById("ratio-height");
let width = document.getElementById("width");
let height = document.getElementById("height");

const calculateWidth = () => {
    let aspectRatio = ratioWidth.value / ratioHeight.value;
    width.value = parseFloat(height.value * aspectRatio).toFixed(2);
}

const calculateHeight = () => {
    let aspectRatio = ratioWidth.value / ratioHeight.value;
    height.value = parseFloat(width.value / aspectRatio).toFixed(2);
}

ratioWidth.addEventListener("input", calculateHeight);
width.addEventListener("input", calculateHeight);
ratioHeight.addEventListener("input", calculateWidth);
height.addEventListener("input", calculateWidth);