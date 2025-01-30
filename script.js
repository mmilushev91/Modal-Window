'use strict';

//functions

const removeHidden = function (object) {
  object.classList.remove('hidden');
};

const addHidden = function (object) {
  object.classList.add('hidden');
};

const openModal = function () {
  const modalButtonsLength = modalButtons.length;

  for (let i = 0; i < modalButtonsLength; i++) {
    modalButtons[i].addEventListener('click', function () {
      removeHidden(modalWindow);
      removeHidden(overlay);
    });
  }
};

const closeModal = function (object) {
  object.addEventListener('click', function () {
    addHidden(modalWindow);
    addHidden(overlay);
  });
};

const excapeModal = function () {
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      addHidden(modalWindow);
      addHidden(overlay);
    }
  });
};

//Declare variables
const modalWindow = document.querySelector('.modal');
const modalButtons = document.querySelectorAll('.show-modal');
const closeButton = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

//OPEN MODAL WINDOW
openModal();

//CLOSE MODAL WINDOW

//1. Click X
closeModal(closeButton);

//2. Click Background
closeModal(overlay);

//3. Press Exc
excapeModal();
