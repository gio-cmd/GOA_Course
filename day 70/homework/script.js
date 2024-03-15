// 1

// const p = document.getElementById('p')
// const myBtn = document.getElementById('my-btn')
// const colors = ["red", 'green', 'orange', "yellow", 'cyan', 'purple']

// let index = 0

// myBtn.addEventListener('click', () =>{
//     let numberP = Number(p.innerHTML)
//     p.innerHTML = numberP + 1
//     p.style.backgroundColor = colors[index]
//     p.parentElement.style.backgroundColor = colors[index + 1]
//     myBtn.style.backgroundColor = colors[index + 2]
//     index = (index + 1) % 6
// })

// 2

// making img slider bc its cooler than the actual task :D

// const srcList = ['ippoMakunouchi.jpg', 'siguma.jpg'];
// const myBtn = document.getElementById('my-btn1');
// const img = document.getElementById('img');
// let index = 0;

// myBtn.addEventListener('click', () => {
//     index = (index + 1) % srcList.length;
//     img.setAttribute('src', srcList[index]);
// });  // best homework so far

// 3

// const p = document.getElementsByTagName('p')
// const myBtn = document.getElementById('my-btn2')

// myBtn.addEventListener('click', () =>{
//     for(let i = 0; i < p.length; i++){
//         p[i].innerHTML = Math.ceil(Math.random() * 10)
//     }
// }) // this also good but second was the best

// 4
//                                                      tottaly not rick roll
// const listUrl = ['https://github.com/gio-cmd', "https://www.youtube.com/watch?v=dQw4w9WgXcQ"]
// const colors = ['green', "red", 'yellow', 'blue', 'pink', 'cyan', 'black', 'orange', 'purple']
// const myBtn = document.getElementById('my-btn3')
// const a = document.getElementById('a')
// let index = 0
// let index2 = 0


// myBtn.addEventListener('click', () => {
//     index = (index + 1) % listUrl.length
//     index2 = (index2 + 1) % colors.length
//     a.setAttribute('href', listUrl[index])
//     a.parentElement.style.backgroundColor = colors[index2]
// })

// 5

const div = document.getElementsByClassName('div')
const myBtn = document.getElementById('my-btn4')
const colors = ['green', "red", 'yellow', 'blue', 'pink', 'cyan', 'black', 'orange', 'purple']

myBtn.addEventListener('click', () => {
    for(let i = 0; i < div.length; i++){
        div[i].style.borderColor = colors[Math.ceil(Math.random() * 9)]
    }
})







