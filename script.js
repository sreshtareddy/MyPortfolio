function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    
}


window.addEventListener('scroll', function() {
    var nav = document.getElementById('desktop-nav');
    if (window.scrollY > 0) {
        nav.classList.add('sticky');
    } else {
        nav.classList.add('sticky');
    }
});
