// 1

// setInterval(function(){
//     let d = new Date()
//     const hour = d.getHours().toString()
//     const minute = d.getMinutes().toString()
//     const second = d.getSeconds().toString()
//     console.log(`${hour}:${minute}:${second}`)
// },1000)

// 2

// let area = parseFloat(prompt("Enter a radius of circle"))

// function calcRadius(){
//     console.log(Math.PI * area * area)
// }

// calcRadius()

// 3

// function kebabCase(string){
//     string = string.replace(/\s+/g, '-')
//     console.log(string)
// }

// kebabCase("asd asd asd asd asd asd asd asd")

// 4

// let date = parseFloat(prompt("Enter a date is seconds to start the countdown"))
// let clear = setInterval(function(){
//     date -= 1;
//     if(date <= 0){
//         console.log("Times up");
//         clearInterval(clear);
//     }
// }, 1000);


// 5

function fibonacci(n) {
    const Sequence = [0, 1]; 

    for (let i = 2; i < n; i++) {
        Sequence.push(Sequence[i - 1] + Sequence[i - 2]);
    }

    return Sequence.slice(0, n);
}

// 6

// function dayOfWeek(date) {
//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     return daysOfWeek[date.getDay()];
// }

// 7

// const d = new Date()

// let year = d.getFullYear()
// let month = d.getMonth() + 1
// let day = d.getDate()

// console.log(`${day}/${month}/${year}`)  // dd/mm/yyyy
// console.log(`${month}/${day}/${year}`)  // mm/dd/yyyy
// console.log(`${year}/${month}/${day}`)  // yyyy/mm/dd


// 8


// let date = parseFloat(prompt('Enter a year'))

// if((date % 4 === 0 && date % 100 != 0) || date % 400 === 0){
//     return true
// }else{
//     return false
// }


// 9

// function differenceInDays(date1, date2) {
//     let date1= new Date(date1);
//     let date2 = new Date(date2);
    
//     let differenceMilliseconds = date2 - date1;
    
//     let differenceInDays = differenceMilliseconds / (1000 * 60 * 60 * 24);
    
//     console.log(differenceInDays);
// }


// 10

function ageCalculator(birthdate) {
    let birthdayDate = new Date(birthdate);
    let currentDate = new Date();
    
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    
    if (currentDate.getMonth() < birthdayDate.getMonth() || (currentDate.getMonth() === birthdayDate.getMonth() && currentDate.getDate() < birthdayDate.getDate())) {
        
        age--;
    }
    
    console.log(age)
}