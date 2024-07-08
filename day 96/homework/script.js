// 1

// const var1 = new Promise((resolve, reject) =>{
//     setTimeout(() => resolve("Task 1 complete"), 2000)
// })

// 2

// const var1 = new Promise((resolve, reject) =>{
//     reject(new Error("error was found"))
// })

// var1
//     .catch(error => console.log(error.message))

// 3

// const var1 = new Promise((resolve, reject) =>{
//     resolve(5)
// })

// var1 
//     .then(num => num * 2)
//     .then(num => console.log(num))


// 4

function promisestorer(){
    const prom = new promise(resolve => {
        setTimeout(() => {resolve('first')}, 2000)
    })

    prom.then(setTimeout(() => {
        resolve('second')
    }, 1000))
}