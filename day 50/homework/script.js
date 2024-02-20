// initializing

let amountInput = document.getElementById('amount')
let investBtn = document.getElementById('investBtn')
let withdrawBtn = document.getElementById('withdrawBtn')
let balanceDisplay = document.getElementById('balance')

// function time

investBtn.addEventListener('click', function(event) {
    
    let amount = parseFloat(amountInput.value)
    let currentBalance = parseFloat(balanceDisplay.innerText)

    let newbalance = currentBalance + amount;
    balanceDisplay.innerText = newbalance

    amountInput.value = ''
});

withdrawBtn.addEventListener('click', function(event) {
    
    let amount = parseFloat(amountInput.value)
    let currentBalance = parseFloat(balanceDisplay.innerText)

    let newbalance = currentBalance - amount;
    balanceDisplay.innerText = newbalance

    
    // if statement
    if (amount > currentBalance){
        alert('Withdrawal failed. Try again')
    }


    amountInput.value = ''
});

