var navigation = document.querySelector('.main-navigation');
var toggle = document.querySelector('.page-header__toggle');
var pageheader = document.querySelector('.page-header')

navigation.classList.remove('main-navigation--nojs');
toggle.classList.remove('page-header__toggle-nojs');
navigation.classList.remove('main-navigation--opened');
navigation.classList.add('main-navigation--closed');
pageheader.classList.remove('page-header--nojs');

toggle.addEventListener('click', function(evt) {
  evt.preventDefault();
  pageheader.classList.toggle('page-header--opened')
  navigation.classList.toggle('main-navigation--closed');
  navigation.classList.toggle('main-navigation--opened');
  toggle.classList.toggle('main-navigation--opened');
});
