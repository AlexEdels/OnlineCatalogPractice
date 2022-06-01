"use strict";

const basketCountEl = document.querySelector('.b-cart__numbOfPrdct');
const basketTotalValueEL = document.querySelector('.b-basket__totalValue');
const basketTotalEl = document.querySelector('.b-basket__total');
const basketEl = document.querySelector('.b-basket');

document.querySelector('.b-cart').addEventListener('click', () => {
    basketEl.classList.toggle('b-basket_hidden')
});

const basket = {};

document.querySelector('.b-productDesc').addEventListener('click', event => {
    if (!event.target.closest('.b-addToCartBg__button')) {
        return;
    }
    const productEl = event.target.closest('.b-catalog__product');
    const id = +productEl.dataset.id;
    const name =productEl.dataset.name;
    const price = +productEl.dataset.price;
    addToCart(id, name, price);
});

document.querySelector('.b-catalog__box').addEventListener('click', event => {
    if (!event.target.closest('.b-addToCartBg__button')) {
        return;
    }
    const productEl = event.target.closest('.b-catalog__product');
    const id = +productEl.dataset.id;
    const name =productEl.dataset.name;
    const price = +productEl.dataset.price;
    addToCart(id, name, price);
});

function addToCart(id, name, price) {
    if (!(id in basket)) {
        basket[id] = {
            id: id,
            name: name,
            price: price,
            count: 0
        };
    }
    basket[id].count++;
    basketCountEl.textContent = getBasketTotalCount();
    basketTotalValueEL.textContent = getBasketTotalValue();
    renderProductInBasket(id);
}

function getBasketTotalCount() {
    return Object.values(basket).reduce((acc, product) => 
        acc + product.count, 0);
}

function getBasketTotalValue() {
    return Object.values(basket).reduce((acc, product) => 
        acc + product.count * product.price, 0);
}

function renderProductInBasket(id) {
    const basketRowEl = basketEl
        .querySelector(`.b-basket__row[data-productId="${id}"]`);
    if (!basketRowEl) {
        return renderNewProductInBasket(id);
    }
    basketRowEl.querySelector('.b-basket__productCount').textContent = 
        basket[id].count;
    basketRowEl.querySelector('.b-basket__productToatalRow').textContent = 
        basket[id].price * basket[id].count;    
}

function renderNewProductInBasket(productId) {
    const productRow = `
    <div class="b-basket__row" data-productId="${productId}">
        <div>${basket[productId].name}</div>
        <div>
            <span class="b-basket__productCount">${basket[productId].count}</span> PCs.
        </div>
        <div>${basket[productId].price}</div>
        <div>
            <span class="b-basket__productToatalRow">${(basket[productId].price * basket[productId].count)}</span>
        </div>
    </div>
    `
    basketTotalEl.insertAdjacentHTML('beforebegin', productRow);
}