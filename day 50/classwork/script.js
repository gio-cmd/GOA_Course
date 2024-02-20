// console.log(1 > 2)
// console.log(1 < 2)
// console.log(1 === 2)
// console.log(1 >= 2)
// console.log(1 <= 2)

let checkbox = document.getElementById('checkbox');
let submitBtn = document.getElementById('submitbtn');

submitBtn.addEventListener('click', function() {
    if (checkbox.checked){
        alert('payment succefull')
    }else{
        alert('payment failed')
    }
});