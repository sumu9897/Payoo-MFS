// document.getElementById('button-login').addEventListener('click',function(event){
//     event.preventDefault();
//     console.log("LogIn Button Click");


//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber,pinNumber)

//     if(phoneNumber == '017' && pinNumber === '1234'){
//         console.log('Your are logged in');
//     }else{
//         console.log('Invalid phone number or pin number');
//     }
// })


document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault();

    // Get Phone number and pin

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    if(phoneNumber == '017' && pinNumber === '1234'){
        console.log('Your are logged in');
        window.location.href= "/home.html"
    }else{
        alert('Invalid phone number or pin number');
    }

})