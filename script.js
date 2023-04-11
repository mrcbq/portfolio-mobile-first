const openMenuButton = document.querySelector('#open-menu-button')
const closeMenuButton = document.getElementById('close-menu-button')
const mobileMenuOptions = document.getElementById('mobile-menu-list').querySelectorAll('li');

const openMobileMenu = () => {
    document.getElementById('mobile-menu').classList.add('show');
    document.querySelector('header').classList.add('hide')
    let sections = document.querySelectorAll('section');
    sections.forEach((opt) => {
        opt.classList.add('hide')
    })
};
const closeMobileMenu = () => {
    document.getElementById('mobile-menu').classList.remove('show');
    document.querySelector('header').classList.remove('hide')
    let sections = document.querySelectorAll('section');
    sections.forEach((opt) => {
        opt.classList.remove('hide')
    })
};

openMenuButton.addEventListener('click', openMobileMenu);
closeMenuButton.addEventListener('click', closeMobileMenu);

mobileMenuOptions.forEach((opt) => {
    opt.addEventListener('click', closeMobileMenu);
})