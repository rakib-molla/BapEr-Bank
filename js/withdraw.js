// step-1: add event handler with the withdraw button
document.getElementById('withdraw').addEventListener('click', function(){

    // step-2: get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;

    // also make sure to convert the input into a number by using parseFloat
    const newWithdrawAmount = parseFloat(newWithdrawString);

    // step-7: clear the input field
    withdrawField.value = '';

    if( isNaN(newWithdrawAmount)){
        alert('please provide a valid number')
        return
    }

    // step-3: get the previous withdraw total 
    const WithdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawString = WithdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawString);

    // step- 6: 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if( newWithdrawAmount > previousBalanceTotal){
        alert('invalid amount');
        return
    }

    // step-4: calculate total withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    // step-5: set total withdraw amount
    WithdrawTotalElement.innerText = currentWithdrawTotal;

    // set the total balance
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    

})

document.getElementById('logout').addEventListener('click', function(){
    window.location.href = 'index.html'
})