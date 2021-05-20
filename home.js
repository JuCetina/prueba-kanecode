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

/** Submenús **/

/** Submnú Help **/

let helpButton = document.querySelector('.bar__user-icon-help');
let helpSubmenu = document.querySelector('.bar__help-submenu-container');

const showHideHelpSubmenu = () => {
    helpSubmenu.classList.toggle('is-active');
}

helpButton.addEventListener('click', showHideHelpSubmenu);

/** Submenú Notifications **/

let notificationsButton = document.querySelector('.bar__user-icon-notifications');
let notificationsSubmenu = document.querySelector('.bar__notifications-submenu');

const showHideNotificationsSubmenu = () => {
    notificationsSubmenu.classList.toggle('is-active');
}

notificationsButton.addEventListener('click', showHideNotificationsSubmenu);

/** Submenú User **/

let userButton = document.querySelector('.bar__user-icon--arrow');
let userSubmenu = document.querySelector('.bar__user-submenu');

const showHideUserSubmenu = () => {
    userButton.classList.toggle('is-active');
    userSubmenu.classList.toggle('is-active');
}

userButton.addEventListener('click', showHideUserSubmenu);