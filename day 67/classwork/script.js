// const form = document.querySelector('form');

// form.addEventListener('submit', function(event) {
//     const password = document.getElementById('password').value;
//     const repeatedPassword = document.getElementById('repeated-password').value;

//     if (password !== repeatedPassword) {
//         alert("Passwords do not match. Please enter matching passwords.");
//         event.preventDefault(); 
// })

// function FormData(username, email, password, repeatedPassword) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//     this.repeatedPassword = repeatedPassword;

//     this.displayData = function() {
//         console.log(his.username);
//         console.log(this.email);
//         console.log(this.password);
//         console.log(this.repeatedPassword);
//     }
// }

// const form = document.querySelector('form');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const repeatedPassword = document.getElementById('repeated-password').value;

//     if (password !== repeatedPassword) {
//         alert("Passwords do not match. Please enter matching passwords.");
//         return; 
//     }

//     const formData = new FormData(username, email, password, repeatedPassword);


//     formData.displayData();
// });