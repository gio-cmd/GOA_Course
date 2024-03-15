// const divId = document.getElementById('div')
// console.log(divId)

// const divClass = document.getElementsByClassName('div')
// console.log(divClass)

// const div = document.getElementsByTagName('div')
// console.log(div)


// const myBtn = document.getElementById('my-btn');
// const parentDiv = document.getElementById('parent-div');

// myBtn.addEventListener('click', function() {
//     parentDiv.style.flexDirection = 'column';
// });


// const p = document.getElementById('p');

// p.parentElement.style.backgroundColor = 'blue'

// const body = document.getElementsByTagName('body')
// const html = document.getElementsByTagName('html')
// const div = document.getElementById("mydiv");

// console.log(body.childElementCount);
// console.log(div.childElementCount);

// console.log(div.children);
// console.log(html.children);
// console.log(body.children);

// console.log(div.nextElementSibling);
// console.log(html.nextElementSibling);

// console.log(div.previousElementSibling);

// console.log(div.parentElement);

const pTags = document.getElementsByClassName('p')

for(let i = 0; i < pTags.length; i++){
    pTags[i].innerHTML += " vanishvili"
}