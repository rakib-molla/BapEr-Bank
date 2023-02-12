
// step-1: add event listener to the deposit button 
document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    // step-2: get the deposit amount from the deposit input field
    // for input field ude .value to the value inside the input field
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

     // step-7: clear the deposit field
     depositField.value = ''; 

    if( isNaN(newDepositAmount)){
        alert('please provide a valid number')
        return
    }
    
    // step-3: get the current deposit total amount
    // for non-input (element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step-4: ad numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total 
    depositTotalElement.innerText = currentDepositTotal;

    // step-5: get current total balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total 
    balanceTotalElement.innerText = currentBalanceTotal;

      

})