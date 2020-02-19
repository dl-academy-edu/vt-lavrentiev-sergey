var openModule = document.querySelector('.slider-button__explore');
var closeModule = document.querySelector('.form-close');
var moduleWindow = document.querySelector('.modal-window__bg');

openModule.addEventListener('click', function () {
  document.querySelector('.modal-window__bg').style.display = 'flex';
})

closeModule.addEventListener('click', function () {
  document.querySelector('.modal-window__bg').style.display = 'none';
})

