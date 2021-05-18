/*** Funcionalidad del menú ***/

let menuButton = document.querySelector('.menu__button');
let menu = document.querySelector('.menu');

let menuItems = document.querySelectorAll('.menu__items');
let menuItemsArray = [...menuItems];

let menuTexts = document.querySelectorAll('.menu__item-text');
let menuTextsArray = [...menuTexts];

const showHideMenu = () => {
    menu.classList.toggle('is-active');
    menuItemsArray.map(item => item.classList.toggle('is-active'));
    menuTextsArray.map(text => text.classList.toggle('is-active'));
}

menuButton.addEventListener('click', showHideMenu);