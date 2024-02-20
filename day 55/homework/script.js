console.log(5 + 5) //10
console.log(5 / 5) // 1
console.log(5 - 5) // 0
console.log(5 * 5) // 25
console.log(5 ** 5) // 3125
console.log(5 > 5) // false
console.log(5 < 5) // false
console.log(5 === 5) // true
console.log(5 <= 5) // true
console.log(5 >= 5) // true
console.log(5 % 5) // 0
console.log(5 < 5 && 5 <= 5) // true
console.log(5 > 5 || 5 === 5) // true

// example
let list = ("rock", "paper", "scissors")

let firstChoice = list[Math.floor(Math.random()*list.length)];
let secondChoice = list[Math.floor(Math.random()*list.length)];

if ((firstChoice === "rock" && secondChoice === "paper") || (firstChoice === "paper" && secondChoice === "rock") || (firstChoice === "scissor" && secondChoice === "paper")){
    console.log("first choice won")
}else if(firstChoice === secondChoice){
    console.log("Its a tie")
}else{
    console.log("second choice won")
}

let me = {
    name : "giorgi",
    age : 20,
    hustle : "active",
    height : 189,
    location : "gori",
    morningRoutine : {
        wake : "up",
        make : "breakfast",
        goTo : 'school'
    },
}