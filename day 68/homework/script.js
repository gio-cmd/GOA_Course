// 1

// const number = Number(prompt("Enter a Number: "))

// for(let i = number; i >= 1; i--){
//     console.log(i)
//     if(i === 1){
//         console.log("TImes up")
//     }
// }

// 2


// function isPrime(number) {
//     if (number < 2) {
//       return false;
//     }
  
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
  
//     return true;
// }

// const list = [];
// for (let i = 2; i <= 50; i++) {
//     if (isPrime(i)) {
//         list.push(i);
//     }
// }
// console.log(list)

// 3

// const person = {
//     name : "giorgi",
//     lastNamee : "vanishvili",
//     age : 15,
//     studingInfo : {
//         school : {
//             subject1 : "math",
//             subject2 : "georgian",
//             subject3 : "chemistry"
//         },
//         GOA : {
//             subject1 : "programming",
//             subject2 : "marketing",
//             subject3 : "life"
//         }
//     }
// }

// console.log(person.name, person.lastNamee, person.age, person.studingInfo)

// 4

// let factorial = 1
// const number = Number(prompt("Enter a number: "))

// for(let i = 1; i <= number; i++){
//     factorial *= i
// }
// console.log(factorial)

// 5

// const numbersInput = prompt("Enter a list of numbers and seperate them by spaces:");

// const Array = numbersInput.split(" ");
// for (let i = 0; i < Array.length; i++) {
//     Array[i] = parseInt(Array[i]);
// }

// let sum = 0;
// for (let i = 0; i < Array.length; i++) {
//     sum += Array[i];
// }

// console.log(sum);

// 6


// const basket = [
//     { name: 'Apple', color: 'Red' },
//     { name: 'Banana', color: 'Yellow' },
//     { name: 'strawberry', color: 'red' },
//     { name: 'dragonFruit', color: 'red' },
//     { name: 'orange', color: 'orange' }
// ];

// for (let i = 0; i < basket.length; i++) {
//     console.log(basket[i].name);
// }

// 7

// const carsObject = [
//     { brand: 'toyota', color: 'Red', year : 2000 },
//     { brand: 'dodge', color: 'Yellow', year : 2012 },
//     { brand: 'tesla', color: 'red', year : 2021 },
//     { brand: 'skyline', color: 'red', year : 1989 },
//     { brand: 'opel', color: 'orange', year : 1995 }
// ];

// for (let i = 0; i < carsObject.length; i++) {
//     console.log(carsObject[i].brand);
//     console.log(carsObject[i].color);
//     console.log(carsObject[i].year);
// }

// 8


// const shoppingList = [
//     { name: 'spaggheti', quantity: '2'},
//     { name: 'can of beans', quantity: '6'},
//     { name: 'mayo', quantity: '1'},
//     { name: 'ketchup', quantity: '1'},
//     { name: 'meat', quantity: '2kg'}
// ];

// for (let i = 0; i < carsObject.length; i++) {
//     console.log(shoppingList[i].name;
//     console.log(shoppingList[i].quantity);
// }


// 9

// const attendance = [
//     { name: 'luka', attendance: '94%'},
//     { name: 'jemal', attendance: '11%'},
//     { name: 'mike', attendance: '66%'},
//     { name: 'nikoloz', attendance: '40%'},
//     { name: 'edward', attendance: '76%'}
// ];

// for (let i = 0; i < carsObject.length; i++) {
//     console.log(attendance[i].name);
//     console.log(attendance[i].attendance);
// }


// 10

// const tasks = [
//     { description: 'todays homework', priority: 'High' },
//     { description: 'workout', priority: 'Medium' },
//     { description: 'Buy groceries', priority: 'Low' },
//     { description: 'Read a atomic habits', priority: 'High' }
// ];

// for (let i = 0; i < tasks.length; i++) {
//     console.log(tasks.description);
//     console.log(tasks.priority)
// }

// 11

// const bookshelf = [
//     { title: 'Rich dad poor dad', author: 'Robert Kiyosaki' },
//     { title: '1984', author: 'George Orwell' },
//     { title: 'Atomic habits', author: 'James Clear' },
//     { title: 'How full is your bucket', author: 'Tom rat' }
// ];

// console.log("Bookshelf Organizer:");
// for (let i = 0; i < bookshelf.length; i++) {
//     console.log(bookshelf.title);
//     console.log(bookshelf.author);
// }

// 12

// const plants = [
//     { name: 'Rose', wateringSchedule: 'Every 2 days' },
//     { name: 'tita', wateringSchedule: 'Once a week' },
//     { name: 'Tomato', wateringSchedule: 'Every 3 days' },
//     { name: 'cucumber', wateringSchedule: 'Twice a week' }
// ];

// for (let i = 0; i < gardenPlants.length; i++) {
//     console.log(plants.name);
//     console.log(plants.wateringSchedule);
// }

// 13

// const recipeSteps = [
//     { description: 'Preheat the oven to 350°F', duration: '5 minutes' },
//     { description: 'Mix the flour, sugar, and baking powder in a bowl', duration: '10 minutes' },
//     { description: 'Add eggs and milk to the mixture', duration: '5 minutes' },
//     { description: 'Pour the batter into a greased baking pan', duration: '3 minutes' },
//     { description: 'Bake in the preheated oven for 30 minutes', duration: '30 minutes' },
//     { description: 'Let the cake cool before serving', duration: '15 minutes' }
// ];

// for (let i = 0; i < recipeSteps.length; i++) {
//     console.log(`description - ${recipeSteps[i].description}, duration - ${recipeSteps[i].duration}`);
// }

// 14

// const movies = [
//     { title: 'Gravity Falls', rating: 8.8 },
//     { title: 'The Shawshank Redemption', rating: 9.3 },
//     { title: 'One piece', rating: 9.2 },
//     { title: 'hajime no ippo', rating: 8.9 },
//     { title: 'Dark knight', rating: 9.0 }
// ];


// for (let i = 0; i < movies.length; i++) {
//     console.log(`Title: ${movies[i].title} - Rating: ${movies[i].rating}`);
// }

// 15

// const albums = [
//     { title: 'Abbey Road', artist: 'The Beatles' },
//     { title: 'Thriller', artist: 'Michael Jackson' },
//     { title: 'The Dark Side of the Moon', artist: 'Pink Floyd' },
//     { title: 'Rumours', artist: 'Fleetwood Mac' },
//     { title: 'Back in Black', artist: 'AC/DC' }
// ];  // dont know any music bands so the titles and artist names arent written by solely me


// for (let i = 0; i < albums.length; i++) {
//     console.log(`title - ${albums[i].title} - Artist: ${albums[i].artist}`);
// }
