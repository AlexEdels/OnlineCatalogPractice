"use strict";

const sizeScrollEl = document.getElementById('sizeScroll');
const sizeScrollButtonEl = document.getElementById('sizeScrollButton');

document.querySelector('body').addEventListener('click', event => {
    if (event.target !== sizeScrollButtonEl.querySelector('h4') &&
        event.target !== sizeScrollButtonEl.querySelector('path') &&
        event.target !== sizeScrollButtonEl.querySelector('svg') &&
        event.target !== sizeScrollButtonEl &&
        event.target !== sizeScrollEl) {
            sizeScrollEl.classList.add('hidden');
        }
});

sizeScrollButtonEl.addEventListener('click', () => {
    sizeScrollEl.classList.toggle('hidden');
});

sizeScrollEl.querySelectorAll('input').forEach(el =>
    document.querySelector('body').addEventListener('click', event => {
        if (event.target == el) {
            sizeScrollEl.classList.remove('hidden');
        }
}));

sizeScrollEl.querySelectorAll('label').forEach(el =>
    document.querySelector('body').addEventListener('click', event => {
        if (event.target == el) {
            sizeScrollEl.classList.remove('hidden');
        }
}));

sizeScrollEl.querySelectorAll('.form-check').forEach(el =>
    document.querySelector('body').addEventListener('click', event => {
        if (event.target == el) {
            sizeScrollEl.classList.remove('hidden');
        }
    }));
