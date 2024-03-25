// const form = document.getElementById('form');
// const parent = document.getElementById('parent');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     let p1 = document.createElement('p');
//     let p2 = document.createElement('p');
//     let name = document.createTextNode(form.elements.name.value);
//     let email = document.createTextNode(form.elements.email.value);

//     p1.appendChild(name);
//     p2.appendChild(email);

//     parent.appendChild(p1);
//     parent.appendChild(p2);
// });

let userFound = false;

for (let i = 0; i < userInfo.length; i++) {
    const user = userInfo[i];
    if (user.name === userNameInput && user.password === userPasswordInput) {
        userFound = true;
        break;
    }
}

if (userFound) {
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    const name = document.createTextNode(userNameInput);
    const password = document.createTextNode(userPasswordInput);

    p1.appendChild(name);
    p2.appendChild(password);

    parent.appendChild(p1);
    parent.appendChild(p2);
} else {
    let p = document.createElement('p');
    let error = document.createTextNode('Account does not exist');
    p.appendChild(error);
    parent.appendChild(p);
}