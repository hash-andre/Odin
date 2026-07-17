// --- GLOBAL VARIABLES ---
let humanScore = 0;
let computerScore = 0;
const numberOfRounds = 5;
let round = 0;
let gameActive = false;

// Array for computer choices
const choices = ["Rock", "Paper", "Scissors"];

// Array for human choices and event listeners (interface with buttons)
const buttons = [
    document.getElementById("rock"),
    document.getElementById("paper"),
    document.getElementById("scissors")
    ]

buttons.forEach((button) => {
    button.addEventListener("click", handleChoice);
});

function handleChoice(event) {
    if (!gameActive || round >= numberOfRounds) return;

    const humanChoice = event.currentTarget.value;
    const computerChoice = getComputerChoice();

    console.log(humanChoice, computerChoice);

    const result = playRound(humanChoice, computerChoice);

    round += 1;

    console.log(result);

    score.textContent =
        `Round ${round}/${numberOfRounds} · ` +
        `You ${humanScore} – ${computerScore} Computer`;

    if (round === numberOfRounds) {
        gameActive = false;

        buttons.forEach((button) => {
            button.disabled = true;
        });
    }
}


//Helper function for computerChoice
function getRandomInt(max){
    return Math.floor(Math.random()* max);
}

function getComputerChoice(){
    let index = getRandomInt(3);
    return choices[index];
}

function playRound(humanChoice, computerChoice) {
  const winningMoves = {
    Rock: "Scissors",
    Paper: "Rock",
    Scissors: "Paper"
  };

  if (humanChoice === computerChoice) {
    msg.textContent = "It's a tie!";
    return;
  }

  if (winningMoves[humanChoice] === computerChoice) {
    humanScore += 1;
    msg.textContent = `You won, ${humanChoice} beats ${computerChoice}`;
    return;
  }

  computerScore += 1;
   msg.textContent = `You lost, ${computerChoice} beats ${humanChoice}`;
}

function resetGame(){
  humanScore = 0;
  computerScore = 0;
  round = 0;

  msg.textContent = "";
  startButton.textContent = "Restart game";
}



// Change theme
const themeButton = document.querySelector("#switch-theme");

document.documentElement.classList.add("dark");
themeButton.textContent = "☀️";

themeButton.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");

  themeButton.textContent = isDark ? "☀️" : "🌕";
});

// Start game
const startButton = document.querySelector("#start-game");
const score = document.getElementById("score");
const msg = document.getElementById("messages");
const btnSect = document.querySelector(".buttons");
const main = document.querySelector("main");

startButton.addEventListener("click", () => {
    resetGame();
    gameActive = true;

    buttons.forEach((button) => {
        button.disabled = false;
    });

    main.style.flex = "0.5";
    btnSect.classList.add("is-visible");
    score.textContent = "Choose your move";
});
