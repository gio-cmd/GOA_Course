const numbers = [1, 2, 3, 4, 5]

let result = 0


numbers.forEach(function(num){
    result += num
})


function manualForEach(arr, subFunc){
    for(let i = 0; i < arr.length; i++){
        subFunc(arr[i])
    }
}


manualForEach(numbers, function(num){
    console.log(num)
})


let result1 = 1;

numbers.forEach(function(num) {
    result1 *= num;
});

return result1;



function manualReduce(arr, subFunc, startingValue) {
    let result = startingValue;
    for (let i = 0; i < arr.length; i++) {
        result = subFunc(result, arr[i]);
    }
    return result;
}

let result2 = manualReduce(numbers, function(val, num) {
    return val * num;
}, 2);
