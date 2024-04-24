// 1


// const person = [
//     {name : "griffith", lastName : 'dubledor'},
//     {name : 'ippo', lastName : 'makunouchi' }
//     ]


// const onlyNames = person.map(person => person.name)

// console.log(onlyNames)


// 2


// const numbers = [1, 2, 3, 4, 5, 6, 7, 10, 211, 131231, 1314235, 564334, 235366434]

// const nums = numbers.map(primeChecker)

// function primeChecker(num){
//     if(num <= 1){
//         return false
//     }else if(num <= 3){
//         return true
//     }else if(num % 2 === 0 || num % 3 === 0 || num % 5 === 0){
//         return false
//     }else{
//         return true
//     }
// }


// 3

// const pGrade = 79

// const students = [
//     {name : "gio", score : 11},
//     {name : "luka", score : 80},
// ]

// function scoreChecker(score){
//     if(score.score > pGrade){
//         return score.score 
//     }
// }

// let filteredStudents = students.filter(scoreChecker)

// console.log(filteredStudents)

// 4


// const files = ["asdas.asda", 'opel.py', 'img.jpg'];

// function fileChecker(file) {
//     if (file.endsWith('.jpg')) {
//         return file;
//     }
// }

// const filteredFiles = files.filter(fileChecker);




// function map(arr, myFunc) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(transformFunc(arr[i], i, arr));
//     }
//     return result;
// }


// function myFilter(arr, filterFunc) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (filterFunc(arr[i], i, arr)) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }