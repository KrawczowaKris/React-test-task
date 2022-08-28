const VALID_EMAIL = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const VALID_NAME = /^[А-ЯЁа-яё ]+$/;

var buttonOpenForm = document.getElementById('myBtn');
var request = document.getElementById('request');
var columnsContainer = document.querySelector('.columns-container');
var nameUser = document.querySelector('.name');
var emailUser = document.querySelector('.email')
var buttonSubmitForm = document.querySelector('.button_submit');
var warning = document.querySelector('.warning');

// Появление модального окна
buttonOpenForm.onclick = function() {
    request.style.display = "block";
    columnsContainer.style.opacity = "0.53";
};

window.onkeydown = function(evt) {
    if (evt.keyCode == 27) {
        columnsContainer.style.opacity = "1";
        request.style.display = "none";
        warning.style.display = "none";
    }
};

// Валидация полей
nameUser.addEventListener('input', addBacklightName);
emailUser.addEventListener('input', addBacklightEmail);

function addBacklightName() {
    if (isNameValid(nameUser.value)) {
        nameUser.style.borderColor = "green";
        warning.style.display = "none";
    } else {
        nameUser.style.borderColor = "red";
    }
}

function addBacklightEmail() {
    if (isEmailValid(emailUser.value)) {
        emailUser.style.borderColor = "green";
        warning.style.display = "none";
    } else {
        emailUser.style.borderColor = "red";
    }
}

function isNameValid(value) {
    return VALID_NAME.test(value) && value.split(' ').join('').length >= 2;
}

function isEmailValid(value) {
    return VALID_EMAIL.test(value);
}

// Отправка формы
buttonSubmitForm.onclick = function(evt) {
    evt.preventDefault();

    if (nameUser.style.borderColor === "green" && emailUser.style.borderColor === "green") {
        console.log(1);
    } else {
        warning.style.display = "block";
    }
}
