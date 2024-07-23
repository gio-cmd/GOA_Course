let add = document.getElementById('add')
let substract = document.getElementById('substract')
let result = document.getElementById('result')

add.addEventListener('click', ()=>{
    result.innerHTML += 1
})

substract.addEventListener('click', ()=>{
    result.innerHTML -= 1
})