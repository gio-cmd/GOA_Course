// 1

// const signUpForm = document.getElementById("signup");
// const signInForm = document.getElementById("signin");

// const dataBase = []

// class Account {
//     #password;

//     constructor(email, password){
//         this.email = email;
//         this.#password = password;
//     }

//     get password(){
//         return this.#password;
//     }

// }

// signUpForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     dataBase.push(new Account(signUpForm.email.value, signUpForm.password.value));

//     alert("Account Succesfully created");

// })

// signInForm.addEventListener("submit", (e) => {
//     e.preventDefault()


//     const acc = dataBase.find((obj) => obj.email === signInForm.email.value);

//     if(acc.password === signInForm.password.name) alert("Succeesfully signin");
    

// })



// 2 sololearn


// 3.0

// 3.1
class person{
    #password;  // 4.0

    constructor(name, age, gender, password){
        this.name = name
        this.age = age
        this.gender = gender
        this.#password = password
    }

    greet(){
        console.log(`Hello, ${this.name}`)  // 3.3
    }

    get returnAge(){
        return this.age     // 3.7
    }

    get ageIn10Years(){
        return this.age + 10     // 3.8
    }


    set newName(changedName){
        this.name = changedName   // 3. 9
    }

    get userPass(){
        return this.#password
    }
}
const person1 = new person('gio', 16, 'male','giorgi123')   // 3.2


// 3.4
console.log(person1.name)
console.log(person1.age)    
console.log(person1.gender)

// 3.5

person1.name = 'alika'

// 3.6

const person2 = new person('jorj', 16, 'male')
const person3 = new person('zuka', 16, 'male')

