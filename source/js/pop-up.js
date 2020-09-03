

var loginLink = document.querySelector(".search-of-hotel");
var loginPopup= document.querySelector(".form-flex");
var loginLogin = loginPopup.querySelector(".calendar")
var loginPassword = loginPopup.querySelector(".calendar1")
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}


loginPopup.classList.add("modal-show");


loginLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginPopup.classList.toggle("modal-show");
    loginLogin.focus();
   
});

loginPopup.addEventListener("submit", function (evt) {
  loginPopup.classList.remove("modal-error");
  document.body.offsetWidth = document.body.offsetWidth
  if (!loginLogin.value || !loginPassword.value) {
    evt.preventDefault();
    loginPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("calendar", loginLogin.value);
    }
  }
});






