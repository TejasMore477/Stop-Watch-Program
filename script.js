const display = document.getElementById("display");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    
    if(isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }

}

function stop(){

    if(isRunning){
        clearInterval(timer);
        elapsedTime =Date.now() - startTime;
        isRunning = false;
    }

}

function reset(){

    clearInterval(timer);
    let startTime = 0;
    let elapsedTime = 0;
    let isRunning = false;
    display.textContent = "00:00:00:00";

}

function update(){

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 *60 *60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let secconds = Math.floor(elapsedTime / 1000 % 60);
    let miliseconds = Math.floor(elapsedTime % 1000 / 10);
    
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    secconds = String(secconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${secconds}:${miliseconds}`
}