// function manualFilter(only_positives, lis) {
//     let positives = only_positives(lis);
    
//     let result = [];
//     for (let i = 0; i < positives.length; i++) {
//         result.push(lis[positives[i]]);
//     }
//     return result;
// }

// function onlyPositives(list) {
//     let result = [];
//     for (let i = 0; i < list.length; i++) {
//         if (list[i] >= 0) {
//             result.push(i);
//         }
//     }
//     return result;
// }


// function manualMap(multipliyer, lis){
//     let changedNumbers = multipliyer(lis)
//     let result = []
//     for(let i = 0; i < lis.length; i++){
//         result.push(changedNumbers[i])
//     }
//     return result
// }

// function multipliyer(lis){
//     let result = []
//     for(let i = 0; i < lis.length; i++){
//         result.push(lis[i] * 2)
//     }
// }


// 1

// let list = ['sss', 11, 12.2, 'hello', true, 'aoo']

// function isInteger(x) {
//     return Number.isInteger(x);
// }

// console.log(list.filter(isInteger))

// 2

// const list = [1, 2, 3, 4, 5]
// const list2 = list.map((num, index) => {
//     if (index % 2 == 0) {
//         return num * 2
//     } else {
//         return num
//     }
// })
// console.log(list2);