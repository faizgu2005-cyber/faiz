function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

function openMenu() {
    const menu = document.getElementById('fullMenu');
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    const menu = document.getElementById('fullMenu');
    menu.classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeMenu();
    }
});
