let leftNav = document.getElementById('left-nav');
let rightNav = document.getElementById('right-nav');

let navbarToggle = document.getElementById('navbar-toggle');

let menuButton = document.querySelector('.navbar__menu-icon');

const handleClick = function () {
    // mainMenu.map((item) => item.classList.toggle('active'));
    leftNav.classList.toggle('active');
    rightNav.classList.toggle('active');
    menuButton.classList.toggle('active');
};

navbarToggle.addEventListener('click', handleClick);
