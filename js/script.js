// Отримуємо елементи
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

// Додаємо подію кліку для відкриття/закриття меню
burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Відкриває або закриває меню
});

// Закриваємо меню при кліку на пункт меню (для UX)
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});