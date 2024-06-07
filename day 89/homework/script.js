// 1

function sumArray(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

// 2

function longestWord(strings){
    let longest = ''
    for(let string of strings){
        if(longest.length < string.length){
            longest = string
        }
    }
    return longest
}

// 3

function keysOfObjects(obj){
    let keys = []
    for(let item of obj){
        keys.push(item)
    }
    return keys
}


// in js we have things which are called scopes, first lets say what a scope is. scope is a area(code block) were the code we wrote is available
// we have 3 different keywords when creating a variable: let, const, var and each of them have different scopes
// firstly let keyword when used inside code block it is and only is available in that code block same tiwh const
// ohh but var is a different case because it can be used outside the codeblock it was originaly used that could cause some problems

// Hoisting is a JavaScript mechanism where variable and function declarations
// are moved to the top of their containing scope (either the global scope or a function scope)
// This means that you can use variables and functions 
// before you have actually declared them in your code.



// arrows


// 1
let square = (num) => {
    return num ** 2
}


// 2

let evensOnly = (list) =>{
    let evens = []
    for(num of list){
        if(num % 2 == 0){
            evens.push(num)
        }
    }
    return num
}

// 3



let sum = (list) => {
    let sum = 0
    for(num of list){
        sum += num
    }
    return sum
}


// 4


const fibonacci = (length) => {
    if (length <= 0) return [];
    if (length === 1) return [0];
    
    const sequence = [0, 1];
    while (sequence.length < length) {
        const nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(nextValue);
    }
    return sequence;
};

// 5

const isPalindrome = (strng) =>{
    return strng == strng.split('').reverse().join('')
}

// 6

const button = document.getElementById('button')
button.addEventListener('click', () =>{
    button.style.backgroundColor = `rgba(${255}, ${255}, ${255}, ${0.01})`
})
