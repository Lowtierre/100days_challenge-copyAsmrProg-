const inputColorLeft = document.getElementById("left-color");
const inputColorRight = document.getElementById("right-color");
const btns = document.querySelectorAll(".buttons button")
const generateBtn = document.getElementById("generate-btn");
const textBox = document.querySelector(".css-box")
const textArea = document.getElementById("css-text");
const copyBtn = document.getElementById("copy")

let direction = '';

generateBtn.addEventListener("click", () => {
    let colorLeft = inputColorLeft.value;
    let colorRight = inputColorRight.value;

    document.body.style.background = `linear-gradient(${direction}${colorLeft}, ${colorRight})`;
    textArea.innerHTML = `background: linear-gradient(${direction}${colorLeft}, ${colorRight})`;
    textBox.onmouseover = function () {
        copyBtn.style.visibility = "visible";
    }
    textBox.onmouseout = function () {
        copyBtn.style.visibility = "hidden";
    }

    copyBtn.onclick = function () {
        let outputCode = textArea.textContent;
        console.log(outputCode)
        navigator.clipboard.writeText(outputCode)
    }

});

const setDirection = (dir, button) => {
    for (let btn of btns) {
        btn.classList.remove("active");
    }
    button.classList.add("active");
    direction = `${dir}, `
    console.log(dir);
}
