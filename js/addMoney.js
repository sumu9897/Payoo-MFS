

document.getElementById('btn-add-money')
.addEventListener('click',function(event){
    event.preventDefault();

    // Get money and the pin number

    const addMoney = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoney);
    const pinNumber = document.getElementById('input-pin-number').value;

    if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber= parseFloat(balance)

        const newBalance = balanceNumber + addMoneyNumber;

        document.getElementById('account-balance').innerText = newBalance

    }else{
        alert('Failed to add Money! Please try again later.')
    }

})