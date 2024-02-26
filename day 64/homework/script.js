// 1

const person = {
    name : "giorgi",
    city : "gori",
    age : 15,
    greeting : function(){
        console.log(`Hello ${name}`)
    }
}

// 2

console.log(person.name);

// 3

person.age = 16

// 4

person.country = "Georgia"

// 5

person.greeting()

// 6

const object1 = {
    name : "vano",
    age : 11,
    hobby : "ice hockey"
}

const object2 = {
    name : "vano",
    age : 11,
    hobby : "ice hockey"
}

console.log(object1 === object2)  // false! even tho they have similar properties they are still different objects

// 7

const school = {
    students : {
        name : "giorgi",
        age : 11,
        name : "aleko",
        age : 21,
        name : "ana",
        age : 9,
        name : "saba",
        age : 17,
    }
}

// 8

const calculator = {
    sum: function(num1, num2) {
        console.log(num1 + num2);
    },
    subtraction: function(num1, num2) {
        console.log(num1 - num2);
    },
    multiply: function(num1, num2) {
        console.log(num1 * num2);
    },
    divide: function(num1, num2) {
        if (num2 !== 0) {
            console.log(num1 / num2);
        } else {
            return "You cannot divide by 0";
        }
    }
};

// 9

const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    const userName = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const pEror = document.getElementById('passwordError') //pEror short for passwordError
    const uEror = document.getElementById('usernameError') //uEror short for usernameError

    if (userName.length < 5) {
        uEror.textContent = 'Username must be at least 5 characters long.';  // check for first rule: username must be more than 5 characters
        return;
    }

    if (password.length < 8) {
        pEror.textContent = 'Password must be at least 8 characters long.'; // check for first rule: password must be more than 8 characters
        return;
    }

    const user = {
        username: userName,
        password: password  // create an object with userInfo
    };

    console.log('User registered:', user);  // console log user object
});



