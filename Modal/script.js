'use strict';

const showModalElem = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const modalElem = document.querySelector('.modal');
const overlayElem = document.querySelector('.overlay');

const openModal = function () {
  modalElem.classList.remove('hidden');
  overlayElem.classList.remove('hidden');
};

const closeModal = function () {
  modalElem.classList.add('hidden');
  overlayElem.classList.add('hidden');
};

showModalElem.forEach(test => test.addEventListener('click', openModal));

closeModalBtn.addEventListener('click', closeModal);

overlayElem.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalElem.classList.contains('hidden')) {
    closeModal();
  }
});
