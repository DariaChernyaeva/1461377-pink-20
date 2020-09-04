var button = document.querySelector(".form-block-buttons__send");
var popup = document.querySelector(".pop-up-fail");
var surname = document.querySelector(".form-block__input");
var namename = document.querySelector(".form-block__inputsecond");
var patronymic = document.querySelector(".form-block__inputthird");
var number = document.querySelector(".form-block-contacts__form-block-input");
var mail = document.querySelector(".form-block-contacts__form-block-input--modif");
var generalform = document.querySelector(".qwerty");

var button = document.querySelector(".form-block-buttons__send");
var popupSuccess = document.querySelector(".pop-up-success");
var close = document.querySelector(".pop-up-success__button-close");

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("pop-up-success--show");
});



generalform.addEventListener("submit", function(evt) {
    surname.classList.remove("pop-up-fail-error");
    namename.classList.remove("pop-up-fail-error");
    patronymic.classList.remove("pop-up-fail-error");
    mail.classList.remove("pop-up-fail-error");


  if (!surname.value) {
    evt.preventDefault();
    surname.classList.add("pop-up-fail-error");
  }

  if (!namename.value) {
    evt.preventDefault();
    namename.classList.add("pop-up-fail-error");
  }

  if (!patronymic.value) {
    evt.preventDefault();
    patronymic.classList.add("pop-up-fail-error");
  }

  if (!mail.value) {
    evt.preventDefault();
    mail.classList.add("pop-up-fail-error");
  }

  if(surname.value && namename.value && patronymic.value && mail.value){
    evt.preventDefault()
  popupSuccess.classList.add("pop-up-success--show");
  } else {
    evt.preventDefault()
    popup.classList.add("pop-up-success--show");
  }
});
