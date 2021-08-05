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
const name_desktop = document.querySelector('#name-desktop');
const email_desktop = document.querySelector('#email-desktop');
const msg_desktop = document.querySelector('#msg-desktop');
const errormsgdesktop = document.querySelector('#errormsgdesktop');
const mobileSubmit = document.querySelector('#form-submit-mobile');
const name_mobile = document.querySelector('#name-mobile');
const email_mobile = document.querySelector('#email-mobile');
const msg_mobile = document.querySelector('#msg-mobile');
const errormsgmobile = document.querySelector('#errormsgmobile');
var d_formInfo = {name:'', email:'', msg:''};
var m_formInfo = {name:'', email:'', msg:''};
var desktop_info = "";
var mobile_info = "";

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
  const str = email_desktop.value;
  const myEmail = str.toLowerCase();
  if (str !== myEmail) {
    errormsgdesktop.style.display = 'block';
  } else {
    errormsgdesktop.style.display = 'none';
  }
});

mobileSubmit.addEventListener('click', () => {
  const str = email_mobile.value;
  const myEmail = str.toLowerCase();
  if (str !== myEmail) {
    errormsgmobile.style.display = 'block';
  } else {
    errormsgmobile.style.display = 'none';
  }
});

name_desktop.addEventListener('input', () => {
  d_formInfo.name = name_desktop.value;
  desktop_info = JSON.stringify(d_formInfo);
  console.log(desktop_info);
  localStorage.setItem('desktop_data', desktop_info);
});

email_desktop.addEventListener('input', () => {
  d_formInfo.email = email_desktop.value;
  desktop_info = JSON.stringify(d_formInfo);
  console.log(desktop_info);
  localStorage.setItem('desktop_data', desktop_info);
});

msg_desktop.addEventListener('input', () => {
  d_formInfo.msg = msg_desktop.value;
  desktop_info = JSON.stringify(d_formInfo);
  console.log(desktop_info);
  localStorage.setItem('desktop_data', desktop_info);
});

document.addEventListener('DOMContentLoaded', () => {
  const d_savedData = JSON.parse(localStorage.getItem('desktop_data'));
  if (d_savedData !== null) {
    name_desktop.value = d_savedData.name;
    email_desktop.value = d_savedData.email;
    msg_desktop.value = d_savedData.msg;
  }
});
