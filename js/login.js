document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault();
    console.log("LogIn Button Click");


    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber)
})