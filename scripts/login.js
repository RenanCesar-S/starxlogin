let loginBtn = document.querySelector('#login_button');
let userName = document.querySelector('#userID');
let password = document.querySelector('#userPassword');
let loginMessage = document.querySelector('#loginError');

function userCredentials(e) {
    e.preventDefault();

    let userNameV = document.querySelector('#userID').value;
    let passwordV = document.querySelector('#userPassword').value;
    

    let loginMessageDisplayNone = loginMessage.style.display = "none";
    let loginMessageDisplayBlock = loginMessage.style.display = "block";
    let loginMessageStyle = loginMessage.style

    if(userNameV === "admin" && passwordV === "admin"){
        
        loginMessageDisplayBlock;
        loginMessage.style.color = "green"
        loginMessage.innerHTML = "Welcome to StarX Gaming...";

        setInterval(() => {
            location.href = "../pages/home.html";
        }, 2000);

    } else {
        loginMessageDisplayBlock;
        loginMessage.style.color = "red"
        loginMessage.innerHTML = "Incorrect username or password. Please try again.";
    }
}

userName.addEventListener('focus', ()=>{
    loginMessage.style.display = "none";
})
password.addEventListener('focus', ()=>{
    loginMessage.style.display = "none"
})


loginBtn.addEventListener('click', userCredentials)