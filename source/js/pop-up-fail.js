var button = document.querySelector(".form-block-buttons__send");
var popup = document.querySelector(".pop-up-fail");
var surname = document.querySelector(".form-block__input");
var namename = document.querySelector(".form-block__inputsecond");
var patronymic = document.querySelector(".form-block__inputthird");
var number = document.querySelector(".form-block-contacts__form-block-input");
var mail = document.querySelector(".form-block-contacts__form-block-input--modif");
var generalform = document.querySelector(".form-block");

generalform.addEventListener("submit", function(evt) {
  if (!surname.value) {
    evt.preventDefault();
    surname.classList.add("pop-up-fail-error");
  }
});

generalform.addEventListener("submit", function(evt) {
  if (!namename.value) {
    evt.preventDefault();
    namename.classList.add("pop-up-fail-error");
  }
});

generalform.addEventListener("submit", function(evt) {
  if (!patronymic.value) {
    evt.preventDefault();
    patronymic.classList.add("pop-up-fail-error");
  }
});

generalform.addEventListener("submit", function(evt) {
  if (!number.value) {
    evt.preventDefault();
    number.classList.add("pop-up-fail-error");
  }
});

generalform.addEventListener("submit", function(evt) {
  if (!mail.value) {
    evt.preventDefault();
    mail.classList.add("pop-up-fail-error");
  }
});
