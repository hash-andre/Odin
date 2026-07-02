function getRandomInt(max){
    return Math.floor(Math.random()* max);
}

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"]
    let index = getRandomInt(3);
    return choices[index];
}

function getHumanChoice() {
  const choices = ["Rock", "Paper", "Scissors"];

  let input = window.prompt('Choose: "Rock", "Paper" or "Scissors"?');

  if (input === null || input.trim() === "") {
    window.alert('Invalid choice.');
    return getHumanChoice();
  }

  input = input.trim().toLowerCase();
  input = input.at(0).toUpperCase() + input.slice(1);

  if (choices.includes(input)) {
    return input;
  }

  window.alert('You need to select between "Rock", "Paper" and "Scissors"!');
  return getHumanChoice();
}


// DEBUG
let i = 0;
while(i < 20){
    console.log(getComputerChoice());
    i++;
}
getHumanChoice();
console.log(getHumanChoice());

