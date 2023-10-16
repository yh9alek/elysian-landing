let btnMenu = document.querySelector('header .logo-container i.fa-bars.menu');
let navbar = document.querySelector('header .navbar');

btnMenu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}