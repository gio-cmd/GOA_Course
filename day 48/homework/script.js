let playerScore = document.getElementById('playerScore')
let computerScore = document.getElementById('computerScore')

let playerName = document.getElementById('playerName')
let name = prompt()
let playerRoll = document.getElementById('playerRoll')

let computerRoll = document.getElementById('computerRoll')

let rollbtn = document.getElementById('roll')
let resetbtn = document.getElementById('reset')

playerName.innerText = name;

rollbtn.addEventListener('click', function() {
    // Generate random integers between 1 and 6 
    let playerDiceRoll = Math.floor(Math.random() * 6) + 1;
    let computerDiceRoll = Math.floor(Math.random() * 6) + 1;

    // Update the roll numbers
    playerRoll.innerText = playerDiceRoll;
    computerRoll.innerText = computerDiceRoll;

    // Update playerScore with if statement
    if (playerDiceRoll > computerDiceRoll) {
        let currentValue = parseInt(playerScore.innerText);
        let incrementedValue = currentValue + 1;
        playerScore.innerText = incrementedValue.toString();
    }else if(computerDiceRoll > playerDiceRoll){
        let currentValue = parseInt(computerScore.innerText);
        let incrementedValue = currentValue + 1;
        computerScore.innerText = incrementedValue.toString();
    }
})

resetbtn.addEventListener('click', function() {
    playerRoll.innerText = 0;
    playerScore.innerText = 0;
    computerRoll.innerText = 0;
    computerScore.innerText = 0;
})
