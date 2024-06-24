const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const usernameThatTheUserWrote = loginInput.value;
  localStorage.setItem(USERNAME_KEY, usernameThatTheUserWrote);
  paintGreeting(usernameThatTheUserWrote);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

//()이걸 써주면 한 번만 실행하고 다음부터는 안 해줌

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit); //addEvent할때는 function 이름만 써주고 ()이건 안 써줘도 됨
} else {
  // show the greetings
  paintGreeting(savedUsername);
}
