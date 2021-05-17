
import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple/index';

// const email = new MDCTextField(document.querySelector('.email'));
// const password = new MDCTextField(document.querySelector('.password'));
// const ripple = new MDCRipple(document.querySelector('.social-button'));

// /*** Funcionalidad para agregar colores en los botones del slider ***/

// //Al cargar la página por primera vez, le cambia el color al primer botón del slider
// let firstButton = document.querySelector('.slider__menu-button');
// firstButton.style.backgroundColor = '#f9b76b'; 

// //Se obtienen todos los botones del slider en un NodeList
// let buttons = document.querySelectorAll('.slider__menu-button');

// //El resultado se convierte a array para poder utilizar el método .map()
// let buttonsArray = [...buttons];

// //A cada boton del slider se le agrega un escuchador de evento de click
// buttonsArray.map(button => button.addEventListener('click', e => {
//     //Al dar click, todos los botones se vuelven blancos
//     buttonsArray.map(button => button.style.backgroundColor = '#fff');
//     //El boton clickeado se vuelve de color #f9b76b
//     e.target.style.backgroundColor = '#f9b76b';
// }));

// /*** Funcionalidad para el campo de contraseña ***/

// //Mostrar/ocultar contraseña
// const passwordField = document.querySelector('.password-input');
// const eyeIcon = document.querySelector('.mdc-text-field__icon--trailing');

// let hideShowPassword = () => {

//     if(passwordField.type === "password"){
//         passwordField.setAttribute('type', 'text');
//         eyeIcon.setAttribute('src', 'icons/closeeye.svg');
//     }else{
//         passwordField.setAttribute('type', 'password');
//         eyeIcon.setAttribute('src', 'icons/openeye.svg');
//     }
// }

// eyeIcon.addEventListener('click', hideShowPassword);

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

