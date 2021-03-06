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
        catalogScroll.classList.remove('animate__slideInDown.animate__slideInRight');
    }
});

menuEl.addEventListener('click', () => {
    catalogScroll.classList.toggle('hidden');
    document.getElementById('bodyBack').classList.toggle('bodyBack');
    catalogScroll.classList.add('animate__slideInDown');
    if(window.innerWidth <= 767.98) {
        catalogScroll.classList.add('animate__slideInRight');
        if (document.getElementById('bodyBack').classList.contains('bodyBack')) {
            document.getElementById('main').classList.toggle('hidden');
            document.getElementById('feature').classList.toggle('b-feature_stylesJS');
            document.querySelector('footer').classList.toggle('b-footer_styleJS')
        }
    }
});



buttonClose.addEventListener('click', () => {
    catalogScroll.classList.add('hidden');
    document.getElementById('bodyBack').classList.remove('bodyBack');
    document.getElementById('main').classList.remove('hidden');
    document.getElementById('feature').classList.remove('b-feature_stylesJS');
    document.querySelector('footer').classList.remove('b-footer_styleJS')
    catalogScroll.classList.remove('animate__slideInDown.animate__slideInRight');
});
