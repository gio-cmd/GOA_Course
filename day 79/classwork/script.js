// let parent = document.getElementById('parent')
// let child = document.getElementById('child')
// let child0 = document.getElementById('child0')
// let child2 = document.getElementById('child2')
// let child3 = document.getElementById('child3')

// // bubling
// // parent.addEventListener('click', () =>{
// //     parent.style.backgroundColor = 'red';
// //     child.style.backgroundColor = "orange"
// // })


// // // capturing

// // parent.addEventListener('click', () =>{
// //     parent.style.backgroundColor = 'red';
// //     child.style.backgroundColor = "orange"
// // }, true)


// parent.addEventListener('click', () =>{
//     console.log('parent')
// },true)

// child.addEventListener('click', () =>{
//     console.log('child')
// },true)

// child0.addEventListener('click', () =>{
//     console.log('child2')
// },true)

// child2.addEventListener('click', () =>{
//     console.log('child3')
// },true)


let img = document.getElementById('img')
let next = document.getElementById('next')
let previus = document.getElementById('previus')

let count = 0

let images = [
    "cocos.jpg",
    'banana.jpg',
    'watermelon.png'
]

next.addEventListener('click', () =>{
    count++
    if(count > images.length -1){
        count = 0
    }
    img.src = images[count]
})

previus.addEventListener('click', () =>{
    count--
    if(count < 0){
        count = images.length -1
    }
    img.src = images[count]
})