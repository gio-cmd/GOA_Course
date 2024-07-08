// 1


// fetch("https://fakestoreapi.com/products")
//     .then(response => response.json)
//     .then(data => console.log(data))


// promise object stores the value of asyncronous operation, it will have the value of completion of the process or failure 
// after process completes or failes it then will store the resulting value
// promise has 3 stages: pending, fulfiled and rejected



// bolo

const title = document.getElementById('title');
const img = document.getElementById('img');
const div = document.getElementById('div');

fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        let html = '';
        data.forEach(i => {
            html += `
            <p id="title-${i.id}">${i.title}</p>
            <img src="${i.image}" id="img">
            `;
        });
        div.insertAdjacentHTML('afterbegin', html);
    })
    .catch(err => console.log(`${err}: error`));