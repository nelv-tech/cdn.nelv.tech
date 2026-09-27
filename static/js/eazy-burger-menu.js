const burger = document.getElementById('wf-burger');
const burger_menu = document.getElementById('wf-burger-menu');

if ((burger) && (burger_menu)){
    burger.addEventListener('click', () => {
        burger_menu.classList.toggle('open');
        burger.textContent = (burger.textContent === '☰') ? '✕' : '☰';
    });
    burger_menu.addEventListener('click', () => {
        burger_menu.classList.toggle('open');
        burger.textContent = (burger.textContent === '☰') ? '✕' : '☰';
    });
}