const btnMenu = document.querySelector('.menu-label')
const menuList = document.querySelector('.nav-list')


// Menu hamburgesa

     // Abre y cierar el menu desplegable
const toggleMenu = () => {
    menuList.classList.toggle('is-active');
};

// Carrito




export const menuInit = () => {
    btnMenu.addEventListener('click', toggleMenu);
}
