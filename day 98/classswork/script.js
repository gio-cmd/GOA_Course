// learning apis, even though i alredy learnt about them its good to revise some information


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((res) => {
//         console.log(res, "fullfiled")
//     })
//     .catch((err) => {
//         console.log('Reject reason:', err);
//     })
//     .finally(() => {
//         console.log("Process end")
//     });


const title = document.getElementById('title');
const img = document.getElementById('img');
const div = document.getElementById('div');

fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        let divContext = '';
        for(let i = 0; i < data.length; i++){
            divContext += `
            <p id="title-${data[i].id}">${data[i].title}</p>
            <img src="${data[i].image}" id="img-${data[i].id}">
            `;
        }
        // div.innerHTML = divContext
        div.insertAdjacentHTML('afterbegin', divContext);
    })
    .catch(err => console.log(`${err}: error`));