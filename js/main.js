const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

// ****

const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');

let login = '';

function toogleModalAuth() {
  modalAuth.classList.toggle("is-open");
}

function authorized() {
  console.log('Авторизован');
}

function notAuthorized() {
  console.log('Не Авторизован');

  function logIn(event) {
    console.log(event);
    event.preventDefault();
    console.log('LOGIN');
  }

  buttonAuth.addEventListener('click', toogleModalAuth);
  closeAuth.addEventListener('click', toogleModalAuth);
  logInForm.addEventListener('submit', logIn);
}

if (login) {
  authorized();
} else {
  notAuthorized();
}