document.getElementById('button-area').addEventListener('click', function(){
    const emailArea = document.getElementById('email-area');

    const passArea = document.getElementById('password-area');

    if(emailArea.value == 'anik1@gmail.com' && passArea.value == '12345'){
        window.location.href = 'js/bank.html'
    }
})