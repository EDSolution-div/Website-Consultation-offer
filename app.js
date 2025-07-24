var menu = document.getElementById('menu');
var nav = document.querySelector('#Navbar ul');

menu.onclick = function() {
    menu.classList.toggle('open-menu');
    nav.classList.toggle('view');
};