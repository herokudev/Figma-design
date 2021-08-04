const menuIcon = document.querySelector('.hamburger-menu');
const navBar = document.querySelector('.navbar');
const modal = document.querySelector('#simpleModal');
const modalbtn = document.querySelector('.modalbtn');
const closeBtn = document.querySelector('.closeBtn');
const modalbtn2 = document.querySelector('#desktop-modal-btn');
const desktopmodal = document.querySelector('#desktopModal');
const closeBtn2 = document.querySelector('.d-closeBtn');
const menuItem1 = document.querySelector('#menu-item1');
const menuItem2 = document.querySelector('#menu-item2');
const menuItem3 = document.querySelector('#menu-item3');
const desktopsubmit = document.querySelector('#form-submit-desktop');
const emaildesktop = document.querySelector('#email-desktop');
const errormsgdesktop = document.querySelector('#CustomValidity');
const mobileSubmit = document.querySelector('#form-submit-mobile');
const emailmobile = document.querySelector('#email-mobile');
// const errormsgdesktop = document.querySelector('#CustomValidity');

menuIcon.addEventListener('click', () => {
  navBar.classList.toggle('change');
});

menuItem1.addEventListener('click', () => {
  navBar.classList.toggle('change');
});

menuItem2.addEventListener('click', () => {
  navBar.classList.toggle('change');
});

menuItem3.addEventListener('click', () => {
  navBar.classList.toggle('change');
});

modalbtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modalbtn2.addEventListener('click', () => {
  desktopmodal.style.display = 'block';
});

closeBtn2.addEventListener('click', () => {
  desktopmodal.style.display = 'none';
});

desktopsubmit.addEventListener('click', () => {
  var str = emaildesktop.value;
  var myEmail = str.toLowerCase();
  if (str != myEmail) {
    errormsgdesktop.style.display = 'block';    
  } else {
    errormsgdesktop.style.display = 'none';
  }
});

mobileSubmit.addEventListener('click', () => {
  var str = emailmobile.value;
  var myEmail = str.toLowerCase();
  if (str != myEmail) {
    errormsgdesktop.style.display = 'block';    
  } else {
    errormsgdesktop.style.display = 'none';
  }
});
