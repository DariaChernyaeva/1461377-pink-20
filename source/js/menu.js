var navigation = document.querySelector('.main-navigation');
var toggle = document.querySelector('.page-header__toggle');

navigation.classList.remove('main-navigation--nojs');
toggle.classList.remove('page-header__toggle-nojs');
navigation.classList.remove('main-navigation--opened');
navigation.classList.add('main-navigation--closed');


toggle.addEventListener('click', function(evt) {
  evt.preventDefault();
  navigation.classList.toggle('main-navigation--closed');
  navigation.classList.toggle('main-navigation--opened');
  toggle.classList.toggle('main-navigation--opened');
});
