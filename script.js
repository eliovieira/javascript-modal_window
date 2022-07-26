'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.querySelector('body').style.background =
    'linear-gradient(to top left, #28b487, #000000)';
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  document.querySelector('body').style.background =
    'linear-gradient(to top left, #28b487, #7dd56f)';
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    console.log(event);
    closeModal();
  }
});

/*
btnsShowModal.addEventListener('click', function () {
  console.log('cliqueeeeee');
});
*/
