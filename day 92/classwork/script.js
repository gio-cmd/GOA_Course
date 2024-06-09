// class account{
//     constructor(firstName, lastName,){
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     printInfo(){
//         console.log(this.firstName, this.lastName)
//     }
// }

// const person = new account('giorgi', 'lobjanidze')

// const submitBtn = document.getElementById('submit');
// const arrOfUsers = [];

// class Info {
//     constructor(name, lastName, email) {
//         this.firstName = name;
//         this.lastName = lastName;
//         this.email = email;
//     }
// }

// submitBtn.addEventListener('click', (e) => {
//     e.preventDefault();
    
//     const name = document.getElementById('name').value;
//     const lastName = document.getElementById('lastName').value;
//     const email = document.getElementById('email').value;

//     const newUser = new Info(name, lastName, email);
//     arrOfUsers.push(newUser);

//     console.log(arrOfUsers); 
// });



const submitBtn = document.getElementById('submit');
const arrOfUsers = [];

class Info {
    #password;  

    constructor(name, lastName, email, password) {
        this.firstName = name;
        this.lastName = lastName;
        this.email = email;
        this.#password = password; 
    }

    isAuthorized(inputPassword) {
        return this.#password === inputPassword;
    }
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;  

    const newUser = new Info(name, lastName, email, password);
    arrOfUsers.push(newUser);

    console.log(arrOfUsers); 
});

