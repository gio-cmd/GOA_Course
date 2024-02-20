// initializing some elements :D
let id = document.getElementById('id');
let name = document.getElementById('name');
let phone = document.getElementById('phone');
let submit = document.getElementById('mybtn');
let address = document.getElementById('address');

// writing function for button click
submit.addEventListener('click', function() {
    console.log(id.value); 
    console.log(name.value);
    console.log(phone.value);
    console.log(address.value);
});
