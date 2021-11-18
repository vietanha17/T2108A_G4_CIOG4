function checkUserName () {
    var ElMsg = document.getElementById('feedback');
    if (this.value.length < 5) {
        elMsg.textContent = 'Username must be 5 characters or more';
    }
    else {
        elMsg.textContent = '';
    }
}

//The same with check password -> let try
var elUsername = document.getElementById('username');
//When it loses focus call checkUserName()
elUsername.addEventListener('blur', checkUserName, false);