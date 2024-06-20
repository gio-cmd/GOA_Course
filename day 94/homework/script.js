// 1

// const helloNig = new Promise((resolve, reject) => {
//     resolve("Hello, World!");
// });

// helloNig.then(result => {
//     console.log(result);  
// });


// 2

const helloNig = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello, World!"), 2000);
});

helloNig.then(result => {
    console.log(result);
});


// 3

const promise1 = new Promise((resolve, reject) => {
    resolve("first");
});

const promise2 = promise1.then(result => {
    return result + " " + "second";
});

// 4 da 5


const randomHomeMadePromise = new Promise((resolve, reject) => {
    if (true) {  
        resolve("some info i guess");
    } else {
        setTimeout(() => { reject("Error was found") }, 1000);
    }
});

randomHomeMadePromise
    .then(element => {
        return '1 stage';
    })
    .then(element => {
        return '2 stage';
    })
    .catch(error => {
        console.error('Error:', error);
    });


// 6
function printer() {
    setTimeout(() => console.log("1"), 1000);
    setTimeout(() => console.log("2"), 2000);
    setTimeout(() => console.log("3"), 3000);
}    

// 7

const sequence = (name, second) => new Promise(resolve =>{
    setTimeout(() => resolve(`hello ${name}`), time * 1000)
});

sequence
    .then(result =>{
        return sequence('luka', 1)
    })
    .then(result =>{
        return sequence('nika', 2)
    })


// 8
const bool = false
const prom = new promise((resolve, reject) => {
    if(bool){
        resolve("succes")
    } else{
        reject('error was found')
    }
})

prom
    .then(result =>{
        return result
    })
    .catch(error =>{
        return "failed"
    })


// 9

const messenger = new promise((resolve) => {
    resolve("Hello, Jamal")
})

messenger
    .then((result) => {
        return result
    })

// 10

const chain = new Promise((resolve) => {
    resolve([]);
});

chain
    .then(result => {
        result.push('luka');
        return result;
    })
    .then(result => {
        result.push('jamal');
        return result;
    })
    .then(result => {
        console.log(result);  // Output: ['luka', 'jamal']
        result.push('aleks');
        return result;
    })
    .then(result => {
        console.log(result);  // Output: ['luka', 'jamal', 'aleks']
    });