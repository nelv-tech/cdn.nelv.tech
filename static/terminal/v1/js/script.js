const burger = document.getElementById('burger');
const burger_menu = document.getElementById('burger-menu');

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
window.addEventListener('DOMContentLoaded', () => {
    const reveal_dy_items = document.querySelectorAll('.reveal_dy'); 
    const reveal_items = document.querySelectorAll('.reveal'); 
    reveal_dy_items.forEach(item => item.classList.add('active'));
    reveal_items.forEach(item => item.classList.add('active'));

});
const urlParams = new URLSearchParams(window.location.search);
const currentTheme = urlParams.get('theme'); // получим строку "cyberpunk"

if (currentTheme) {
    console.log(currentTheme)
    // Автоматически подключаем нужный CSS-файл темы с вашего CDN!
    const linkTag = document.createElement('link');
    console.log(linkTag)
    linkTag.rel = 'stylesheet';
    linkTag.href = `https://assets.real_company.org/pixel-ui/v1/css/themes/${currentTheme}.min.css`;
}