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

  // Null and "" can generate errors and break the code
  if (input === null || input.trim() === "") {
    window.alert('Invalid choice.');
    return getHumanChoice();
  }

  // Here we want the choice in title case
  input = titleCase(input);

  if (choices.includes(input)) {
    return input;
  }

  window.alert('You need to select between "Rock", "Paper" and "Scissors"!');
  return getHumanChoice();
}

function playRound(humanChoice, computerChoice) {
  if(humanChoice === computerChoice){
    console.log("It's a tie!");
    window.alert("It's a tie!");
    return;
  }
  else if(humanChoice === "Rock"){
    if(computerChoice === "Scissors"){
        console.log("You won, " + humanChoice + " beats " + computerChoice);
        window.alert("You won, " + humanChoice + " beats " + computerChoice);
        humanScore += 1;
        return;
    }
    else if(computerChoice === "Paper"){
        console.log("You lost, " + computerChoice + " beats " + humanChoice);
        window.alert("You lost, " + computerChoice + " beats " + humanChoice);
        computerScore += 1;
        return;
    }

  }
  else if(humanChoice === "Paper"){
    if(computerChoice === "Rock"){
        console.log("You won, " + humanChoice + " beats " + computerChoice);
        window.alert("You won, " + humanChoice + " beats " + computerChoice);
        humanScore += 1;
        return;
    }
    else if(computerChoice === "Scissors"){
        console.log("You lost, " + computerChoice + " beats " + humanChoice);
        window.alert("You lost, " + computerChoice + " beats " + humanChoice);
        computerScore += 1;
        return;
    }
    
  }
  else if(humanChoice === "Scissors"){
    if(computerChoice === "Paper"){
        console.log("You won, " + humanChoice + " beats " + computerChoice);
        window.alert("You won, " + humanChoice + " beats " + computerChoice);
        humanScore += 1;
        return;
    }
    else if(computerChoice === "Rock"){
        console.log("You lost, " + computerChoice + " beats " + humanChoice);
        window.alert("You lost, " + computerChoice + " beats " + humanChoice);
        computerScore += 1;
        return;
    }
  }
}

function playGame(){
    while(round < number_of_rounds){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    console.log("COMPUTER: " + computerSelection + "\nHUMAN: " + humanSelection);
    playRound(humanSelection, computerSelection);
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




