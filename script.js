let scoreBlue = 0;
let scoreRed = 0;
let blueDisplay = document.querySelector(`.score--blue`);
let redDisplay = document.querySelector(`.score--red`);
let leadingMessage = document.querySelector(".leading-message");

console.log(blueDisplay);
// Blue Side
function addBluePoint1(){
    scoreBlue += 1;
    blueDisplay.innerHTML = scoreBlue;
    leadingTeam()
}
function addBluePoint2(){
    scoreBlue += 2;
    blueDisplay.innerHTML = scoreBlue;
    leadingTeam()
}
function addBluePoint3(){
    scoreBlue += 3;
    blueDisplay.innerHTML = scoreBlue;
    leadingTeam()
}

//Red Side
function addRedPoint1(){
    scoreRed += 1;
    redDisplay.innerHTML = scoreRed;
    leadingTeam()
}
function addRedPoint2(){
    scoreRed += 2;
    redDisplay.innerHTML = scoreRed;
    leadingTeam()
}
function addRedPoint3(){
    scoreRed += 3;
    redDisplay.innerHTML = scoreRed;
    leadingTeam()
}

function leadingTeam(){
    if(scoreBlue > scoreRed){
        leadingMessage.innerHTML = `The Blue side is leading!`;
    }
    else {
        leadingMessage.innerHTML = `The Red side is leading!`;
    }  
}

function resetGame() {
    scoreBlue = 0;
    scoreRed = 0;
    blueDisplay.innerHTML = scoreBlue;
    redDisplay.innerHTML = scoreRed;
    leadingMessage.innerHTML = ``;
}