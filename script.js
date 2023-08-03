let mainScreen = document.getElementById("container")
mainScreen.style.display = "none";
let instructions = document.getElementById("instructions");
let allTimeCounterDisplay = document.getElementById("allTimeCounterDisplay");
let allTimeCounter = localStorage.getItem("alltimecounter");

let darkmodeColor = rgb(48, 46, 46);
let lightmodeColor = rgb(255, 255, 255);

function start() {
  instructions.style.display = "none"
  mainScreen.style.display = "block";
  allTimeCounterDisplay.innerHTML = allTimeCounter;
}

function generateRandomInteger(max) {
  return Math.floor(Math.random() * max) + 1;
}

let textbox = document.getElementById("textbox");
let correct = document.getElementById("correct");
let scoreDisplay = document.getElementById("score");
let number = generateRandomInteger(100);
let score = 0;

document.addEventListener("keyup", function (event) {
  if (event.code === 'Enter') {
    submit();
  }
});

function submit() {
  if (textbox.value == number) {
    correct.innerHTML = "You were correct!";
    textbox.value = "";
    score = score + 1;
    scoreDisplay.innerHTML = "Score: " + score;
    allTimeCounter = +allTimeCounter + 1;
    allTimeCounterDisplay.innerHTML = "All Time Score: " + allTimeCounter;
    localStorage.setItem("alltimecounter", allTimeCounter);
    number = generateRandomInteger(100);
  } else if (textbox.value > number) {
    textbox.value = "";
    correct.innerHTML = "The number is smaller";
  } else if (textbox.value < number) {
    textbox.value = "";
    correct.innerHTML = "The number is bigger";
  }
}

function cheatsOn() {
  cheatInterval = setInterval(tellnum, 2000);
}

function tellnum() {
  console.log(number);
}

function cheatsOff() {
  console.log(number);
  clearInterval(cheatInterval)
}

function mehack(number) {
  score = number;
  scoreDisplay.innerHTML = score;
}

function besthackerOn() {
  hackInterval = setInterval(insanehack, 1000);
}

function besthackerOff() {
  clearInterval(hackInterval);
}

function insanehack() {
  textbox.value = number;
  submit()
}

function setnum(num) {
  number = num;
}

function scoreReset() {
  score = 0;
  scoreDisplay.innerHTML = score;
}

function AllTimeScoreReset() {
  allTimeCounter = 0;
  allTimeCounterDisplay.innerHTML = allTimeCounter;
}