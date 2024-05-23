const numbers = [1,2,3,4,5,6,7,8,9]
const booleans = [true, false, true, true]
const strings = ['hello', 'why', 'ey', 'nikelodeon']
const objects = [
    {name : 'giorgi', role : 'mod', overdue : false, id : 12, complete : "complete", inStock : false, isActive : true},
    {name : 'luka', role : 'admin', overdue : true, id : 13, complete : "complete", inStock : true, isActive : false},
    {name : 'sandro', role : 'mod', overdue : true, id : 16, complete : 'uncomplete', inStock : false, isActive : true}
]
const string = 'Hello world'


// 1

const isAllPositive = numbers.every((value) => value > 0)


// 2

const noEmptyString = strings.every((value) => value != "")

// 3

const onlyTrues = booleans.every((value) => value === true)

// 4

const onlyEvens = numbers.every((value) => value % 2 == 0)

// 5

function manualEvery(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        const isTrue1 = func(arr[i]);
        if (!isTrue1) {
            return false;
        }
    }
    return true;
}

// 6


let passingGrade = 5

const someGradeAbovePassing = numbers.some((value) => value >= passingGrade)

// 7

const adminRole = objects.some((value) => value.role === 'admin')

// 8

const overdueChecker = objects.some((value) => value.overdue == true)

// 9
function isPrime(num) {
    if(num <= 1) return false; // Numbers less than or equal to 1 are not prime
    for(let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; // If num is divisible by any number other than 1 and itself
        }
    }
    return true; 
}

const primeChecker = objects.some((value) => isPrime(value))

// 10

function manualSome(arr, func){
    for(let i = 0; i < arr.length; i++){
        const isTrue = func(arr[i])
            if(isTrue){
                return true
            }
    }
    return false
}


// 11

const firstNegativeNum = numbers.find((value) => value < 0)


// 12

const firstCorrectId = objects.find((value) => value.id > 13)

// 13

const firstIncomplete = objects.find((value) => value.complete === 'incomplete')

// 14

const searchEy = strings.find((value) => value === 'ey')

// 15

function manualFind(arr, func){
    for(let i = 0; i < arr.length; i++){
        const correctVal = func(arr[i])
        if(correctVal){
            return arr[i]
        }
    }
}


// 16

const firstPrime = numbers.findIndex(isPrime)

// 17

const firstIdOfAdmin = objects.findIndex((value) => value.role === 'admin')

// 18


const firstOverdue = objects.findIndex((value) => value.overdue === true)

// 19

const firstInStock = objects.findIndex((value) => value.inStock === true)

// 20

function manualFindIndex(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
}

// 21

const firstOInString = string.indexOf((value) => value === 'o')

// 22

const first5InString = string.indexOf((value) => value === '5')

// 23

const firstOccurrenceSubstring = string.indexOf('hello');

// 24

const firstOccurrenceIndex = arrayOfObjects.findIndex(obj => obj.id === 5);

// 25

function manualIndexOf(arr, searchElement, fromIndex = 0) {
    if (fromIndex < 0) {
        fromIndex = Math.max(0, arr.length + fromIndex);
    }

    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === searchElement) {
            return i;
        }
    }
    return -1;
}

// 26

const lastIndex = string.lastIndexOf('o');

// 27

const lastIndexOfPrime = numbers.lastIndexOf(num => isPrime(num));

// 28

const lastIndexOfWord = string.lastIndexOf("apple");

// 29

const lastIndexOfActivity = objects.findIndex(obj => obj.isActive);

// 30

function manualLastIndexOf(arr, searchElement, startIndex = arr.length - 1) {
    if (startIndex >= arr.length) {
        startIndex = arr.length - 1;
    } else if (fromIndex < 0) {
        startIndex = arr.length + startIndex;
    }

    for (let i = fromIndex; i >= 0; i--) {
        if (arr[i] === searchElement) {
            return i;
        }
    }
    return -1;
}



