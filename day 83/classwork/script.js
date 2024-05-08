// let people = [
//     {name : "gio", age : 15},
//     {name : "gio", age : 15}
// ]

// let names = people.map((obj) =>{
//     return obj.name
// })

// console.log(names)



// let numbers = [1, 2, 3, 4, 5, 6]


// let manualMap = numbers.map((square) => {
//     return square ** 2
// })


// const manualFilter = function(arr, func){
//     const newArr = []
    
//     for(let i = 0; i < arr.length; i++){
//         if(func(arr[i])){
//             newArr.push(arr[i])
//         }
//     }
    
//     return newArr;
// }

// const students = [{name: "Luka", grade: 70}, {name: "Lile", grade: 55}, {name: "Nia", grade: 65}]

// const whoPassed = manualFilter(students, function(studentObj){
//     return studentObj.grade >= 60;
// })


function squares(collection, subFunc) {
    if (!Array.isArray(collection)) {
      throw new Error('Collection must be an array');
    }
  
    const clonedArray = collection.slice();

    for (let i = 0; i < clonedArray.length; i += 2) {
      clonedArray[i] = subFunc(clonedArray[i]);
    }
  
    return clonedArray;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const squaredEvenIndices = squares(numbers, function(num) {
    if(num % 2 == 0){
        return num ** 2
    }else{
        return num
    }
  });