"use strict";

const buttonActivate = document.getElementById('filterScrollBtnActivate');
const buttonUnactivate = document.getElementById('filterScrollBtnUnactivate');
const filterScrollEl = document.getElementById('filterScrollEl');

buttonActivate.addEventListener('click', () => {
    filterScrollEl.classList.remove('hidden');
});

buttonUnactivate.addEventListener('click', () => {
    filterScrollEl.classList.add('hidden');
});

document.querySelector('body').addEventListener('click', event => {
    if (event.target !== buttonActivate.querySelector('h3') &&
        event.target !== buttonActivate.querySelector('path') &&
        event.target !== buttonActivate.querySelector('svg') &&
        event.target !== filterScrollEl.querySelector('.b-filterScroll__content') &&
        event.target !== filterScrollEl.querySelector('ul') &&
        event.target !== buttonActivate &&
        event.target !== filterScrollEl) {
            filterScrollEl.classList.add('hidden');
        }
});
filterScrollEl.querySelectorAll('li').forEach(el =>
    document.querySelector('body').addEventListener('click', event => {
        if (event.target == el) {
            filterScrollEl.classList.remove('hidden');
        }
}));
filterScrollEl.querySelectorAll('h5').forEach(el =>
    document.querySelector('body').addEventListener('click', event => {
        if (event.target == el) {
            filterScrollEl.classList.remove('hidden');
        }
}));
filterScrollEl.querySelectorAll('ul').forEach(el =>
    document.querySelector('body').addEventListener('click', event => {
        if (event.target == el) {
            filterScrollEl.classList.remove('hidden');
        }
}));