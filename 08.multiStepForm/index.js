const progressBar = document.getElementById("progress");
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");
const next1 = document.getElementById("next1");
const back1 = document.getElementById("back1");
const next2 = document.getElementById("next2");
const back2 = document.getElementById("back2");
const submit = document.getElementById("submit");

next1.addEventListener("click", () => {
    form1.style.left = "-450px";
    form2.style.left = "30px";
    progressBar.style.width = "240px";
});

next2.addEventListener("click", () => {
    form2.style.left = "-450px";
    form3.style.left = "30px"
    progressBar.style.width = "360px";
    
});

back1.addEventListener("click", () => {
    form1.style.left = "30px"
    form2.style.left = "450px";
    progressBar.style.width = "120px";
});

back2.addEventListener("click", () => {
    form2.style.left = "30px"
    form3.style.left = "450px";
    progressBar.style.width = "240px";
});

