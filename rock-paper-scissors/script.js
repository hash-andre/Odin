// --- GLOBAL VARIABLES ---
let humanScore = 0;
let computerScore = 0;
const number_of_rounds = 5;
let round = 0;
const choices = ["Rock", "Paper", "Scissors"];

function getRandomInt(max){
    return Math.floor(Math.random()* max);
}

function titleCase(input) {
  input = input.trim().toLowerCase();

  if (input === "") {
    return "";
  }

  return input.at(0).toUpperCase() + input.slice(1);
}

function getComputerChoice(){
    let index = getRandomInt(3);
    return choices[index];
}

function getHumanChoice() {
  let input = window.prompt('Choose: "Rock", "Paper" or "Scissors"?');

  if (input === null) {
    return null;
  }

  if (input.trim() === "") {
    window.alert('Invalid choice.');
    return getHumanChoice();
  }

  input = titleCase(input);

  if (choices.includes(input)) {
    return input;
  }

  window.alert('You need to select between "Rock", "Paper" and "Scissors"!');
  return getHumanChoice();
}

function playRound(humanChoice, computerChoice) {
  const winningMoves = {
    Rock: "Scissors",
    Paper: "Rock",
    Scissors: "Paper"
  };

  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }

  if (winningMoves[humanChoice] === computerChoice) {
    humanScore += 1;
    return `You won, ${humanChoice} beats ${computerChoice}`;
  }

  computerScore += 1;
  return `You lost, ${computerChoice} beats ${humanChoice}`;
}

function playGame() {
  while (round < number_of_rounds) {
    const humanSelection = getHumanChoice();

    if (humanSelection === null) {
      window.alert("Game cancelled.");
      return;
    }

    const computerSelection = getComputerChoice();

    console.log("COMPUTER: " + computerSelection + "\nHUMAN: " + humanSelection);

    const result = playRound(humanSelection, computerSelection);

    console.log(result);
    window.alert(result);

    console.log("COMPUTER: " + computerScore + "\nHUMAN: " + humanScore);
    window.alert("COMPUTER: " + computerScore + "\nHUMAN: " + humanScore);

    round += 1;
  }
}

function resetGame(){
  humanScore = 0;
  computerScore = 0;
  round = 0;
}

// Change theme
const themeButton = document.querySelector("#switch-theme");

document.documentElement.classList.add("dark");
themeButton.textContent = "☀️";

themeButton.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");

  themeButton.textContent = isDark ? "☀️" : "🌕";
});

const startButton = document.querySelector("#start-game");

startButton.addEventListener("click", () => {
    resetGame();
    playGame();
});




