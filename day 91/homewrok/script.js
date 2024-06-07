// function objectAssign(object1, object2){
//     return Object.assign({}, object1, object2)
// }

// // 1

// const person = {
//     name: 'giorgi',
//     age: 30
// };

// const employee = Object.assign({}, person, {position: 'data scientist' });

// // 2

// const obj1 = {
//     name: 'giorgi',
//     age: 30
// }

// const obj2 = {
//     name: 'giorgi',
//     age: 30
// }

// objectAssign(obj1, obj2)

// // 3

// const objects = Object.assign({}, obj1, obj2, person)

// // 4

// const original = {
//     name: 'giorgi',
//     age: 30
// };

// const copyObj = Object.assign({}, original)

// // 5

// const target = {
//     name: 'giorgi',
//     age: 30
// };

// const source = {
//     name: 'giorgi',
//     age: 30
// };

// objectAssign(target, source)

// // 6

// const listOfObjects = [obj1, obj2, person, target, source, original]

// const into1Obj = Object.assign({}, ...listOfObjects)

// // 7

// const old = {
//     name: 'giorgi',
//     age: 30
// };

// const updated = {
//     nikname: 'jora'
// };

// objectAssign(updated, old)

// // 8

// const file = {
//     name: 'giorgi',
//     age: 30
// };

// const extension = {
//     nikname: 'jora'
// };

// objectAssign(extension, file)

// // 9

// function manualAssign(target, ...sources) {
//     for (const source of sources) {
//         for (const key in source) {
//             target[key] = source[key];
//         }
//     }
//     return target;
// }

// // 10

// function manualAssign2(target, ...sources) {
//     for (const source of sources) {
//         const keys = Object.keys(source);
//         for (const key of keys) {
//             target[key] = source[key];
//         }
//     }
//     return target;
// }

// // 11

// const array = [1, 2, 3, 4, 5, 6];

// const [one, two, ...rest] = array;

// // 12

// function arguments(one, ...rest){
//     return rest
// }

// // 13

// function addition(...numbers) {
//     let sum = 0
//     for(number of numbers){
//         sum += number
//     }
//     return sum
// }
// // 14

// function func1(...args) {
//     anotherFunction(...args);
// }

// function func2(...args) {
//     return args
// }

// // 15

// const description = {
//     name: 'giorgi',
//     age: 12,
//     city: 'Geo',
//     country: 'Gori'
// };

// const {name, age, ...location} = human;


// // 16

// let listOfArrays = [[1, 1, 1], [2,3,4,5], [7,1,2,3]];

// let singleArray = [].concat(...listOfArrays);

// // 17

// const target1 = {
//     name: 'giorgi',
//     age: 30
// };

// const source1 = {
//     name: 'giorgi',
//     age: 30
// };

// const target2 = {
//     name: 'giorgi',
//     age: 30
// };

// let multipleObj = {...target1, ...source1, ...target2}

// // 18

// let arr = [1, 1, 1];
// let extensions = [2,2,2]

// let appendedArr = arr.push(...extension)

// // 19

// let copyArr = [...arr]

// // 20

// let word = 'halo'

// let wordIntoArr = [...word]

// // 21

// const [one, two, three] = arr;

// 22

// const obj2 = {
//     name: 'giorgi',
//     age: 30
// }

// const {name, age} = obj2

// 23

// const obj2 = {
//     nam0: 'giorgi',
//     a6ge: 30
// }

// const {name, age} = obj2

// 24

// const array = [1, 2, 3];

// const [one, , three] = array;

// 25


// const infos = [
//     {
//         name: 'giorgi',
//         age: 11
//     },
//     {
//         name: 'zuka', 
//         age: 101
//     },
//     {
//         name: 'jamal', 
//         age: 12
//     }
// ];

// for(let i = 0; i < infos.length; i++){
//     console.log(infos[i].name, infos[i].age)
// }


// // 26

// const [first, ...rest] = arr;

// 27

// const [pirveli, ,bolo] = [1, 2, 3];

// 28

// const filteringInfos = infos.filter(({age}) => age % 2 == 0);

// 29

// const arrWithDifferentDataValues = [1, {name: 'jorj', lastName: 'nika'}, 'hello', 3.14];

// const [, {name, lastName}, , float] = mixedArray;

// 30

// function manualDestructing(obj) {
//     const values = [];
//     for (const key in obj) {
//         values.push(obj[key]);
//     }
//     return values;
// }

