var button = document.querySelector(".form-block-buttons__send");
var popup = document.querySelector(".pop-up-success");
var close = document.querySelector(".pop-up-success__button-close");


button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("pop-up-success--show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("pop-up-success--show");
});
