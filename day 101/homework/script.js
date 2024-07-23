// // 1

// const sum = (a, b) =>{
//     return a + b
// }   

// // 2

// const reversedString = (strng) =>{
//     let result = ''
//     for(let i = strng.length -1; i >= 0; i--){
//         result += strng[i]
//     }
//     return result
// }

// // 3


// const evenChecker = (num) => {
//     if(num % 2 == 0){
//         return true
//     }
// }

// // 4

// const arrLength = (arr) => {
//     let len = 0
//     for(let i of arr){
//         len += 1
//     }
//     return len
// }

// // 5

// const rectangle = (width, height) => {
//     return width * height;
// }

// // 6

// const numberDoubler = (arr) => {
//     let result = []
//     for(let num of arr){
//         result.push(num * 2)
//     }
//     return result
// }

// // 7

// const uppercase = (str) => {
//     return str.upper()
// }

// // 8

// const oddsAreBlack = (arr)=>{
//     result = arr.filter((num) => num % 2 == 0)
//     return result
// }

// // 9

// const destreiks = (obj) => {
//     let {name, lastName, id = 1234, password = 555} = obj
// }

// destreiks({name: 'giorgi', lastName: 'abashidze'})

// // 10

// const dynaVal = (obj) => {
//     let name = 'name'
//     let val = 'zave'
//     obj[name] = val 
// }

// // 11

// let name = 'jorji'
// console.log(`hello ${name}`)

// // 12

// let lines = `
// aaa
// aaa
// aaa
// `

// // 13

// let num1 = 1
// let num2 = 2

// console.log(`${num1 + num2}`)

// // 14

// const day = 18;
// const month = 'april';
// const year = 2008;

// const date = `${day} ${month}, ${year}`;

// // 15

// const protocol = 'https';
// const domain = 'facebook.com';
// const path = 'profile/vano';

// const url = `${protocol}://${domain}/${path}`;

// // 16

// const memb = true;
// const welcome = `Welcome${memb ? ', member!' : ', guest!'}`;

// // 17

// const street = 'unnamed street';
// const city = 'gori';
// const zipCode = '1400';

// const address = `${street}, ${city}, ${zipCode}`;

// // 18

// const content = 'TITLE';
// const htmlStructure = `<div>
//   <h1>${content}</h1>
// </div>`;

// // 19

// const elements = ['Item 1', 'Item 2', 'Item 3'];

// const div = `<div>
//   ${elements.map(item => `<li>${item}</li>`).join(' ')}
// </div>`;

// // 20

// const userName = (name) =>{
//     return name
// }

// console.log(`Welcome ${userName('john')}`)

// // 21
// const val = true

// val && console.log(true)

// // 22

// let username = window.prompt('Please enter your username:');
// let user = username || 'guest';

// // 23

// const age = 1;
// const adultChecker = age >= 18 ? 'Adult' : 'kid';

// // 24

// let variable = null

// const func = ()=>{
//     return 'hello'
// }

// variable && func

// // 25

// const defval = '';
// const userInput = window.prompt('Please enter your username:');
// const result = userInput || defval;


// // 26

// const number = 1;
// const coparison = number >= 0 ? 'positive or zero' : 'negative';

// // 27

// const class1 = true;

// const element =  document.createElement('div')

// class1 && element.classList.add('active');

// // 28

// const person = {
//     name: 'luka',
//     age: 17
// }

// console.log(person.lastName || 'this guy has no lastname')

// // 29

// let inpu = window.prompt('Please enter your username:');
// console.log(inpu > 2 ? 'correct inpu' : 'wrong inpu')

// // 30

// let user1 = 'luka'
// let chad = true

// user1 && chad && console.log("chad")

// // 31

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(num => num * 2);


// // 32

// const strings = ['hello', 'world'];
// const uppercased = strings.map(str => str.toUpperCase());

// // 33

// const users = [{ name: 'Alice' }, { name: 'Bob' }];
// const names = users.map(user => user.name);

// // 34

// const numbers = [1, 2, 3, 4];
// const increased = numbers.map(num => num + 5);

// // 35

// const numbers = [4, 9, 16, 25];
// const roots = numbers.map(num => Math.sqrt(num));

// // 36

// const dates = [new Date(2024, 6, 4), new Date(2024, 6, 5)];
// const formattedDates = dates.map(date => date.toDateString());

// // 37

// const strings = ['apple', 'banana', 'cherry'];
// const lengths = strings.map(str => str.length);

// // 38

// const strings = ['one', 'two', 'three'];
// const prepended = strings.map(str => 'Number: ' + str);

// // 39 

// const numbers = [1, 2, 3, 4];
// const isEven = numbers.map(num => num % 2 === 0);

// // 40

// const strings = ['foo', 'bar', 'baz'];
// const replaced = strings.map(str => str.replace('a', '@'));

// // 41

// const numbers = [1, 2, 3, 4];
// const evenNumbers = numbers.filter(num => num % 2 === 0);

// // 42

// const strings = ['apple', 'banana', 'cherry'];
// const longStrings = strings.filter(str => str.length > 5);

// // 43

// const users = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }];
// const age30 = users.filter(user => user.age === 30);

// // 44

// const values = [1, null, 2, undefined, 3];
// const filteredValues = values.filter(value => value != null);

// // 45

// const numbers = [5, 10, 15, 20];
// const greaterThan10 = numbers.filter(num => num > 10);

// // 46

// const words = ['apple', 'banana', 'cherry', 'avocado'];
// const startsWithA = words.filter(word => word.startsWith('a'));

// // 47

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const isPrime = num => {
//   for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
//     if (num % i === 0) return false;
//   }
//   return num > 1;
// };
// const primes = numbers.filter(isPrime);

// // 48 

// const users = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }];
// const over25 = users.filter(user => user.age > 25);

// // 49 

// const numbers = [1, 2, 2, 3, 4, 4];
// const uniqueNumbers = numbers.filter((num, index, arr) => arr.indexOf(num) === index);

// // 50

// const values = [0, 1, false, 2, '', 3];
// const truthyValues = values.filter(Boolean);

// // 51

// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((acc, num) => acc + num, 0);

// // 52

// const strings = ['Hello', 'world'];
// const concatenated = strings.reduce((acc, str) => acc + ' ' + str);

// // 53

// const items = ['apple', 'banana', 'apple'];
// const count = items.reduce((acc, item) => {
//   acc[item] = (acc[item] || 0) + 1;
//   return acc;
// }, {});


// // 55

// const cart = [{ price: 10 }, { price: 20 }, { price: 30 }];
// const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

// // 56

// const people = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }];
// const groupedByAge = people.reduce((acc, person) => {
//   acc[person.age] = acc[person.age] || [];
//   acc[person.age].push(person);
//   return acc;
// }, {});

// // 57

// const nestedArray = [[1, 2], [3, 4], [5]];
// const flatArray = nestedArray.reduce((acc, val) => acc.concat(val), []);

// // 58

// const numbers = [1, 2, 3, 4];
// const product = numbers.reduce((acc, num) => acc * num, 1);

// // 59

// const objects = [{ a: 1 }, { b: 2 }, { c: 3 }];
// const mergedObject = objects.reduce((acc, obj) => Object.assign(acc, obj), {});

// // 60

// const numbers = [1, 2, 2, 3, 4, 4];
// const uniqueNumbers = numbers.reduce((acc, num) => {
//   if (!acc.includes(num)) acc.push(num);
//   return acc;
// }, []);

// // 62

// const name = 'Alice';
// const age = 25;
// const user = { name, age };