const promise = (resolve, reject) => {
    if(true){
        setTimeout(() => {resolve("THe condition was true yaaay")}, 1000)
    }else{
        setTimeout(() => {reject("The condition wast true waah")}, 1000)
    }
}


const orderWait = () => {
    return new promise(promise)
}