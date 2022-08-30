const VALID_EMAIL = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const VALID_NAME = /^[А-ЯЁа-яё ]+$/;

var buttonOpenForm = document.getElementById('myBtn');
var request = document.getElementById('request');
var columnsContainer = document.querySelector('.columns-container');
var nameUser = document.querySelector('.name');
var emailUser = document.querySelector('.email')
var buttonSubmitForm = document.querySelector('.button_submit');
var warning = document.querySelector('.warning');
var success = document.querySelector('.success');
var lost = document.querySelector('.lost');

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
        nameUser.value = "";
        emailUser.value = "";
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
        var xhr = new XMLHttpRequest();
        var url = "https://jsonplaceholder.typicode.com/users";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            var arrayOfXhrStatus = xhr.status;
            if (arrayOfXhrStatus == 0) {
                lost.style.display = "block";
                setTimeout (function() {
                    lost.style.display = 'none';
                }, 3000);
            } else {
                nameUser.value = "";
                emailUser.value = "";
                success.style.display = "block";
                setTimeout (function() {
                    success.style.display = 'none';
                }, 3000);
                
            }
          };
        var data = JSON.stringify({"name": nameUser.value, "email": emailUser.value});
        //console.log(data);
        xhr.send(data);


        // if (xhr.status === 0) {
        //     lost.style.display = "block";
        // } else {
        //     var data = JSON.stringify({"name": nameUser.value, "email": emailUser.value});
        //     xhr.send(data);
        //     success.style.display = "block";
        // }


    } else {
        warning.style.display = "block";
    }
}

function sendData() {

}
