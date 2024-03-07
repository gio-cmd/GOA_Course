// const list = [1,2,3,4,5,6,7,8,9,10]

// for(let i = 0; i < list.length; i++){
//     if(list[i] % 2 === 0){
//         return "Even"
//     }else{
//         return "Odd"
//     }
// }

// const list1 = [1,2,3,4,5,6,7,8,9,10]
// const list2 = []

// for(let i = 0; i < list1.length; i++){
//     if(list1[i] % 2 === 0){
//         list2.push(list1[i])
//     }
// }
// console.log(list2)

// const list = []

// let sum = 0

// for(let i = 0; i <= 100; i++){
//     if(i % 5 === 0){
//         list.push(i)
//         sum += i
//     }
// }
// console.log(list)
// console.log(sum)

// let numbers = []; 

// for (let i = 0; i < 10; i++) {
//     let userChoice = Number(prompt("Enter number "));
//     numbers.push(userChoice);
// }

// let sum = 0;
// let multiplication = 1;
// let squares = [];
// let squareRoots = [];

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     multiplication *= numbers[i];
//     squares.push(Math.pow(numbers[i], 2));
//     squareRoots.push(Math.sqrt(numbers[i]));
// }

// console.log(sum)
// console.log(multiplication)
// console.log(squares)
// console.log(squareRoots)




function Ticket(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.code = Math.floor(Math.random() * 10);
}


function buyTickets() {
    const amount = Number(prompt("How many tickets do you want to purchase?"));
    const Every_Ticket_we_have = [];

    for (let i = 0; i < amount; i++) {
        const name = prompt("Enter your name for ticket ");
        const lastName = prompt("Enter your last name for ticket ");
        const age = parseInt(prompt("Enter your age for ticket "));

        const ticket = new Ticket(name, lastName, age);
        Every_Ticket_we_have.push(ticket);
    }

    return tickets;
}

