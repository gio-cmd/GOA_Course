let userName = document.getElementById('firstName')
let email = document.getElementById('email')
let password = document.getElementById('password')
let myBtn = document.getElementById('mybtn')
let userInfo = document.getElementById('userinfo')
let userName1 = document.getElementById('username')
let userEmail = document.getElementById('useremail')
let userPassword = document.getElementById('userpassword')


myBtn.addEventListener('click', function(){
    let userInput = {
    firstName : userName.value,
    email : email.value,
    password : password.value
    }
    userInfo.textContent = JSON.stringify(userInput)
    userName1.textContent = JSON.stringify(userInput.firstName)
    userEmail.textContent = JSON.stringify(userInput.email)
    userPassword.textContent = JSON.stringify(userInput.password)
})