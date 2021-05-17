
import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple/index';

const email = new MDCTextField(document.querySelector('.email'));
const password = new MDCTextField(document.querySelector('.password'));
const ripple = new MDCRipple(document.querySelector('.social-button'));

/*** Funcionalidades para el campo de contraseña ***/

//Cambiar icono del campo de contraseña si está vacío o no
const passwordField = document.querySelector('.password-input');
const eyeIcon = document.querySelector('.mdc-text-field__icon--trailing');

passwordField.addEventListener('keyup', () => {
    eyeIcon.setAttribute('src', 'icons/openeye.svg');
    if(passwordField.value === ""){
        eyeIcon.setAttribute('src', 'icons/closeeye.svg');
    }
})

//Mostrar/ocultar contraseña
let hideShowPassword = () => {

    if(passwordField.type === "password"){
        passwordField.setAttribute('type', 'text');
        eyeIcon.setAttribute('src', 'icons/closeeye.svg');
    }else{
        passwordField.setAttribute('type', 'password');
        eyeIcon.setAttribute('src', 'icons/openeye.svg');
    }
}

eyeIcon.addEventListener('click', hideShowPassword);