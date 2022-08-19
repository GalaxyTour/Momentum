const divNoLogin = document.querySelector("#divNoLogin");
const divLoginTrue = document.querySelector("#divloginTrue");
const greeting = document.querySelector("#greeting");

const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");

const HIDDEN_CLASSNAME = "hidden";
const FLEXCENTER_CLASSNAME = "flaxCenter";
const USERNAME_KEY = "userName";


function loginButtonOnClick(event) {
    event.preventDefault();
    divNoLogin.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    saveUser(userName);
}

function saveUser(userName) {
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreetings(userName);
}

function paintGreetings(saveUserName) {
    const date = new Date();
    const nowHour = date.getHours();
    let welcomeText = "Hello";

    if(nowHour >= 7 && nowHour < 12){
        welcomeText = "Good Morning!";
    } else if(nowHour >= 12 && nowHour < 18) {
        welcomeText = "Good Afternoon!";
    } else if(nowHour >= 18 && nowHour < 21) {
        welcomeText = "Good Evening!";
    };

    greeting.innerText = `${welcomeText} ${saveUserName}`;
    divLoginTrue.classList.remove(HIDDEN_CLASSNAME);
    divNoLogin.classList.add(HIDDEN_CLASSNAME);
}


const saveUserName = localStorage.getItem(USERNAME_KEY)

if (saveUserName === null) {
    divNoLogin.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginButtonOnClick);
} else {
    paintGreetings(saveUserName);
}