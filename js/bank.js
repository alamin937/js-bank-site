document.getElementById('diposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('diposit-input');

    const depositValue = depositInput.value;

    const depositMoney = document.getElementById('deposit-money');

    const previousAmount = depositMoney.innerText;

    const updatedMoney = parseFloat(previousAmount) + parseFloat(depositValue);

    depositMoney.innerText = updatedMoney;

    depositInput.value = '';

    // widraw amount count

    const balanceAmount = document.getElementById('balance-amount');

   const currentBalance = balanceAmount.innerText;

   const updatedoller = parseFloat(depositValue) + parseFloat(currentBalance);

   balanceAmount.innerText = updatedoller;

})

// withdraw area

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');

    const withdrawValue = withdrawInput.value;

    const withdrawMoney = document.getElementById('withdraw-money');

    const currentWithdraw = withdrawMoney.innerText;

    const mainBalance = parseFloat(currentWithdraw) + parseFloat(withdrawValue);

    withdrawMoney.innerText = mainBalance;

    withdrawInput.value = '';

    // withdraw system

    const mainBalanceAmonut = document.getElementById('balance-amount');

    const currentBalanceAmount = mainBalanceAmonut.innerText;

    const updatedMoneyAmount = parseFloat(currentBalanceAmount) - parseFloat(withdrawValue);

    mainBalanceAmonut.innerText = updatedMoneyAmount;


})
