const burger = document.querySelector('.header__burger');
let isMenuOpen = false;
const menu = document.querySelector('.header__menu');
const links = document.querySelectorAll<HTMLElement>('.header__link');
const logo = document.querySelector<HTMLImageElement>('.header__img');

burger.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
        menu.classList.toggle('active');
        logo.src = '../images/svg/logo-white.svg';
    } else {
        document.body.style.overflow = 'auto';
        menu.classList.toggle('active');
        logo.src = '../images/svg/logo.svg';
    }


});

if (links && menu) {
    links.forEach((link) => {
        link.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            document.body.style.overflow = 'auto';
            menu.classList.toggle('active');
        });
    });
}





