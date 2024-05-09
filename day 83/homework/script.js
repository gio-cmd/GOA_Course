// 1

// const manualMap = function(arr, subFunc){
//     let result = []

//     for(let i = 0; i < arr.length; i++){
//         result.push(subFunc(arr[i]))
//     }
//     return result
// }

// const names = ['lika', 'nia', 'gia', 'hello']

// const func = manualMap(names, (name) =>{
//     return name.toUpperCase()
// })


// 2

// const manualFilter = (arr, subFunc) =>{
//     let result = []

//     for(let i = 0; i < arr.length; i++){
//         if(subFunc(arr[i]) == true){
//             result.push(arr[i])
//         }
//     }
//     return result
// }

// const numbers = [11, 12, 3, 14]

// const func = manualFilter(numbers, (num) =>{
//     if(num % 2 == 0){
//         return true
//     }else{
//         return false
//     }
// })
// 3

// const names = ['lika', 'nia', 'gia', 'hello']

// const capitalized = names.map(function(name){
//     return name.toUpperCase()
// })


// 4

// const names = ['Lika', 'nia', 'Gia', 'hello']

// const filteredNames = names.filter((name) =>{
//     return name[0] === name[0].toUpperCase() && name.length <= 5
// })

// 5

// const numbers = [1, 2, 3, 213, 123, 2445, 214, 11]

// const filteredNums = numbers.filter(function(num){
//     return num > 20 && num % 5 === 0;
// })