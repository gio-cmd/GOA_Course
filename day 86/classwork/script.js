const cars = ['red', 'red', 'red', 'blue'];

const isAllRed = cars.every((value) => {
    return value === 'red';
});

function manualEvery(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        const isTrue1 = func(arr[i]);
        if (!isTrue1) {
            return false;
        }
    }
    return true;
}

const manualIsAllRed = manualEvery(cars, (value) => value === 'red');


function manualSome(arr, func){
    for(let i = 0; i < arr.length; i++){
        const isTrue = func(arr[i])
            if(isTrue){
                return true
            }
    }
    return false
}

const carColorCheker = manualSome(cars, (value) => value === 'red')


function manualFind(arr, func){
    for(let i = 0; i < arr.length; i++){
        const correctVal = func(arr[i])
        if(correctVal){
            return arr[i]
        }
    }
}

firstRed = manualFind(cars, (value) =>{
    return value == 'red'
})