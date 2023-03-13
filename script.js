'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnShowModal.length; i++) {
    btnShowModal[i].addEventListener('click', function () {
        console.log("Button " + (i + 1) + " clicked");

        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}


function closeTheModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeTheModal);
overlay.addEventListener('click', closeTheModal);




document.addEventListener('keydown', function (e) {
    if (e.key === 'q' && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }

})
