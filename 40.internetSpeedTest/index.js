let startTime, endTime;
let imageSize = '';
let image = new Image();

let bitSpeed = document.getElementById("bits");
let kbSpeed = document.getElementById("kbs");
let mbSpeed = document.getElementById("mbs");
let info = document.getElementById("info");

let totalBitsSpeed = 0;
let totalKbSpeed = 0;
let totalMbSpeed = 0;
let numTest = 3;
let testCompleted = 0;

// Get random image from unsplash.com
let imageApi = "https://source.unsplash.com/random?topic=nature";

// When image loads
image.addEventListener('load', async () => {
    endTime = new Date().getTime();
    
    // Get image size
    imageSize = await fetch(imageApi).then(res => res.headers.get('content-length'))
    console.log(imageSize)
    calculateSpeed();
})

// Function to calculate speed
const calculateSpeed = () => {
    // Time taken in seconds
    let timeDuration = (endTime - startTime) / 1000;
    console.log(timeDuration)
    // Total bits
    let loadedBits = imageSize * 8;
    let speedInBits = loadedBits / timeDuration;
    let speedInKbs = speedInBits / 1024;
    let speedInMbs = speedInKbs / 1024;

    totalBitsSpeed += speedInBits;
    totalKbSpeed += speedInKbs;
    totalMbSpeed += speedInMbs;
    testCompleted++;

    if (testCompleted === numTest) {
        let avgBitsSpeed = totalBitsSpeed / numTest;
        let avgKbSpeed = totalKbSpeed / numTest;
        let avgMbSpeed = totalMbSpeed / numTest;

        bitSpeed.innerHTML += avgBitsSpeed.toFixed(2);
        kbSpeed.innerHTML += avgKbSpeed.toFixed(2);
        mbSpeed.innerHTML += avgMbSpeed.toFixed(2);
        
    } else {
        // Run the next test
        startTime = new Date().getTime();
        image.src = imageApi;
    }

}

// Init function
const init = async () => {
    info.innerHTML = 'Testing...';
    startTime = new Date().getTime();
    image.src = imageApi;
}

// When window loads
window.onload = () => {
        init();
}
