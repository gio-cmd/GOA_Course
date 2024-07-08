const div = document.getElementById('div');

fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let html = '';
        for(let i = 0; i < data.length; i++){
            html += `
                <p>${data[i].title}</p>
                <img src="${data[i].image}">
                <p>price: ${data[i].price}</p>
                <p>description: ${data[i].description}</p>
                <p>rating: ${data[i].rating.rate}</p>
                <p>amount: ${data[i].rating.count}</p>
            `;
        }
        div.insertAdjacentHTML('afterbegin', html);
    })


// get method retrives data from the web browser or a server so to put it simply we request some information from server 
// post is a different case in fact its opposite of get, from post we request to send data on web server

const pics = async function() {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        const jsonres = await res.json();
        for (const data of jsonres) {
            let html = `
                <p>${data.title}</p>
                <img src="${data.image}" alt="${data.title}">
                <p>Price: ${data.price}</p>
                <p>Description: ${data.description}</p>
                <p>Rating: ${data.rating.rate}</p>
                <p>Amount: ${data.rating.count}</p>
            `;
            div.insertAdjacentHTML('afterbegin', html);
        }
        
    } catch(err){
        console.error("error");
    }
};





const myForm = document.getElementById('form');
const postsContainer = document.getElementById('posts');

const addNewPost = (postObj) => {
    const html = `
        <article class="post" id="${postObj.id}">
            <h1>${postObj.title}</h1>
            <p>${postObj.body}</p>
            <img src='${postObj.image}' width='200px'/>
        </article>
    `

    postsContainer.insertAdjacentHTML('afterbegin', html);
}

const postFunction = async (body, apiUrl) => {
    try {
        const res = await fetch(apiUrl, body);
        const data = await res.json();
        
        addNewPost(data);
    } catch(err) {
        console.log(err);
    }
} 

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const body = {
        method: "POST",
        body: JSON.stringify({
            title: myForm.elements.title.value,
            body: myForm.elements.body.value,
            userId: 1,
            image: 'https://th.bing.com/th/id/OIP.i0RTPRaXGurvbQHtGSwkLwHaE8?rs=1&pid=ImgDetMain'
        }),
        headers: {
            "Content-type": "application/json"
        }
    }

    postFunction(body, 'https://jsonplaceholder.typicode.com/posts')

});