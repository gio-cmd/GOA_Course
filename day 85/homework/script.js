// needed lists

const numbers = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9,]

const arrays = [
    [{ id: 1, name: "John" }, { id: 2, name: "Alice" }],
    [{ id: 3, name: "Bob" }, { id: 4, name: "Eve" }],
    [{ id: 5, name: "Charlie" }, { id: 6, name: "Diana" }]
];

const arrOfString = ["apple banana", "banana orange", "orange apple apple"];


// 1

function summer(){
    let result = 0

    numbers.forEach(function(num){
        result += num
    })
}
// 2
function numAndIndex(){
    numbers.forEach(function(num, index){
        console.log(`num: ${num}, index: ${index}`)
    })
}
// 3

function productOfArray(){
    const product = numbers.reduce(function(before, after){
        return before * after
    },1)
    return product
}

// 4

function concatArrays(){
    const result = arrays.reduce((before, after) =>{
        return before.concat(after)
    },[])
    return result
}


// 5

function manualforEach(arr, subFunc){
    for(let i = 0; i < arr.length; i++){
        subFunc(arr[i])
    }
}

manualforEach(numbers, function(num){
    console.log(num)
})


// 6

function manualReduce(arr, subFunc, startingValue){
    for(let i = 0; i < arr.length; i++){
        result = subFunc(startingValue, arr[i])
    }
}

manualReduce(numbers, function(acumulator, newVal){
    return acumulator + newVal
}, 0)


// 7

function wordCounter(){
    let string = arrOfString.join(" ")
    let arrOfWords = string.split(' ')

    arrOfWords.reduce(function(wordCount, newWord){
        wordCount[newWord] = (wordCount[newWord] || 0) + 1;
        return wordCount;
    }, {});
}