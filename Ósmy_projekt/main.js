// CHECK THE NAVIGATION CLASS

const ul = document.querySelector('.menu__list');

if (innerWidth <= 799) {
    ul.classList.remove('menu__list--desktop');
}

// SHOW MOBILE NAVIGATION

const bars = document.querySelector('.menu__bars');
const barItems = [...document.querySelectorAll('.menu__bars-item')];

const showNav = () => {
    ul.classList.toggle('active');
    for (let i=0; i<=barItems.length; i++) {
        if (i===1) {
            barItems[i].classList.toggle('active');
            i++;
            barItems[i].classList.toggle('active');
            return;
        }
            barItems[i].classList.toggle('active');
    }
}

bars.addEventListener('click', showNav);

// SHOW DESKTOP MENU

const showDesktopMenu = function() {
    if (innerWidth >= 799) {
        ul.classList.add('menu__list--desktop');
    } else {
        ul.classList.remove('menu__list--desktop');
    }
}

window.addEventListener('resize', showDesktopMenu);

// SHOW POPUP

const popupBtn = document.querySelector('.sign-up-btn');
const poputTheme = document.querySelector('.form-theme');
const formPopup = document.querySelector('.popup');
const cross = document.querySelector('.popup__cross');
const formInputs = [...document.querySelectorAll('.form__input')];

const removePopup = () => {
    poputTheme.classList.remove('active');
    formPopup.classList.remove('active');
    formInputs.forEach(item => item.value = "");
}

const showPopup = (event) => {
    event.preventDefault();
    poputTheme.classList.add('active');
    formPopup.classList.add('active');  

    cross.addEventListener('click', removePopup);
}

popupBtn.addEventListener('click', showPopup);

