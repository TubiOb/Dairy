const navMenu = document.querySelector('#nav-menu'),
    navToggle = document.querySelector('#nav-toggle'),
    navClose = document.querySelector('#nav-close');


if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}


// REMOVE MOBILE MENU
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {

    const navMenu = document.querySelector('#nav-menu');

    navMenu.classList.remove('show-menu');
};
navLink.forEach(n => n.addEventListener('click', linkAction));


// DARK THEME/MODE
let themeButton = document.querySelector('#theme-button');

themeButton.onclick = () => {
    if (themeButton.classList.contains('ri-moon-line')) {
        themeButton.classList.replace('ri-moon-line', 'ri-sun-line');
        document.body.classList.add('active');
    } else {
        themeButton.classList.replace('ri-sun-line', 'ri-moon-line');
        document.body.classList.remove('active');
    }
}