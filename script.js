//Add your global variables here
let pattern = [2, 2, 4, 3, 2, 1, 2, 4];
let progress = 0; 
let gamePlaying = false;
let tonePlaying = false;
let volume = 0.5;
let clueHoldTime = 1000;
let cluePauseTime = 333;
let nextClueWaitTime = 1000;
let guessCounter = 0;
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");






// Add your functions here
function startGame(){
  //new game var
    progress = 0;
    gamePlaying = true;
 
  // switch start and stop
  startBtn.classList.add("hidden");
  stopBtn.classList.remove("hidden");
  //call function
  playClueSequence();
}

function stopGame(){
  console.log("stopGame was called");
  // diff game var
    gamePlaying = false;
  // switch stop and start
  startBtn.classList.remove("hidden");
  stopBtn.classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }

  
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; 
  for(let i=0;i<=progress;i++){ 
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) 
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}


function loseGame(){
  stopGame();
  alert("Game Over! You have been eliminated");
}

function winGame(){
  stopGame();
  alert("You have Won! You have survived this treacherous journey");
}
function showGamePopup(message) {
  document.getElementById("gameMessage").innerText = message;
  document.getElementById("gameMessagePopup").style.display = "block";
}

function hideGamePopup() {
  document.getElementById("gameMessagePopup").style.display = "none";
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length-1){
        winGame();
      }
      else{
        progress++;
        playClueSequence();
      }
    }
    else{
      guessCounter++;
    }
  }
  else{
    loseGame();
  }
}








// Sound Synthesis Functions for Steps 6-8
// You do not need to edit the below code
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}
function playTone(btn, len){ 
  if (!tonePlaying) { 
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;

    setTimeout(() => {
      if (tonePlaying) stopTone();
    }, len);
  }
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
let AudioContext = window.AudioContext || window.webkitAudioContext 
let context = new AudioContext()
let o = context.createOscillator()
let g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)