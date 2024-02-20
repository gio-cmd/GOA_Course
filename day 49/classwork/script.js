// player variables
let playerChoice = document.getElementById('p-choice')
let submitBtn = document.getElementById('submitbtn')

// computer variable

let computerChoice = document.getElementById('c-choice')
let computerChoiceJS;

// declaring winner

let winner = document.getElementById('winner')

// rock paper etc
let items = Array("rock", "paper", "scissors");

// event listener 
submitBtn.addEventListener('click', function() {
    computerChoiceJS = items[Math.floor(Math.random()*items.length)];
    computerChoice.innerText = computerChoiceJS

    if (playerChoice.value === computerChoiceJS){
    winner.innerText = "Nobody! Its a tie"
    }else if (playerChoice.value == 'rock') {
        if (computerChoiceJS == 'paper') {
            winner.textContent = 'Computer Won';

        } else {
            winner.textContent = 'Player Won'
        }
    }
    else if (playerChoice.value == 'scissors') {
        if (computerChoiceJS == 'rock') {
            winner.textContent = 'Computer Won';
        } else {
            winner.textContent = 'Player Won';
        }
    }
    else if (playerChoice.value == 'paper') {
        if (computerChoiceJS == 'scissors') {
            winner.textContent = 'Computer Won';
        } else {
            winner.textContent = 'Player Won';
        }
    }
})

