const menuIcon = document.querySelector('.hamburger-menu');
const navBar = document.querySelector('.navbar');
const menuItem1 = document.querySelector('#menu-item1');
const menuItem2 = document.querySelector('#menu-item2');
const menuItem3 = document.querySelector('#menu-item3');

menuIcon.addEventListener('click',(event) => {
    navBar.classList.toggle("change");
});
