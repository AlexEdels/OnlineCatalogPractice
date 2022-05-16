'use strict';

const menuEl = document.getElementById('menuEl');
const catalogScroll = document.getElementById('catalogScroll');
const buttonClose = document.getElementById('buttonClose');

document.querySelector('body').addEventListener('click', event => {
    if (event.target == document.querySelector('.bodyBack')) {
        catalogScroll.classList.add('hidden');
        document.getElementById('bodyBack').classList.remove('bodyBack');
        document.getElementById('main').classList.remove('hidden');
        document.getElementById('feature').classList.remove('b-feature_stylesJS');
        document.querySelector('footer').classList.remove('b-footer_styleJS')
    }
});

menuEl.addEventListener('click', () => {
    catalogScroll.classList.toggle('hidden');
    document.getElementById('bodyBack').classList.toggle('bodyBack');
    if( window.innerWidth <= 767.98) {
        document.getElementById('main').classList.toggle('hidden');
        document.getElementById('feature').classList.toggle('b-feature_stylesJS');
        document.querySelector('footer').classList.toggle('b-footer_styleJS')
    }
});

buttonClose.addEventListener('click', () => {
    catalogScroll.classList.add('hidden');
    document.getElementById('bodyBack').classList.remove('bodyBack');
    document.getElementById('main').classList.remove('hidden');
    document.getElementById('feature').classList.remove('b-feature_stylesJS');
    document.querySelector('footer').classList.remove('b-footer_styleJS')
});
