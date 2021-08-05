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
const nameDesktop = document.querySelector('#name-desktop');
const emailDesktop = document.querySelector('#email-desktop');
const msgDesktop = document.querySelector('#msg-desktop');
const errormsgdesktop = document.querySelector('#errormsgdesktop');
const mobileSubmit = document.querySelector('#form-submit-mobile');
const nameMobile = document.querySelector('#name-mobile');
const emailMobile = document.querySelector('#email-mobile');
const msgMobile = document.querySelector('#msg-mobile');
const errormsgmobile = document.querySelector('#errormsgmobile');
var desktopFormInfo = {name:'', email:'', msg:''};
var mobileFormInfo = {name:'', email:'', msg:''};
var desktopInfo = "";
var mobileInfo = "";

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
  const str = emailDesktop.value;
  const myEmail = str.toLowerCase();
  if (str !== myEmail) {
    errormsgdesktop.style.display = 'block';
  } else {
    errormsgdesktop.style.display = 'none';
  }
});

mobileSubmit.addEventListener('click', () => {
  const str = emailMobile.value;
  const myEmail = str.toLowerCase();
  if (str !== myEmail) {
    errormsgmobile.style.display = 'block';
  } else {
    errormsgmobile.style.display = 'none';
  }
});

nameDesktop.addEventListener('input', () => {
  desktopFormInfo.name = nameDesktop.value;
  desktopInfo = JSON.stringify(desktopFormInfo);
  localStorage.setItem('desktop_data', desktopInfo);
});

emailDesktop.addEventListener('input', () => {
  desktopFormInfo.email = emailDesktop.value;
  desktopInfo = JSON.stringify(desktopFormInfo);
  localStorage.setItem('desktop_data', desktopInfo);
});

msgDesktop.addEventListener('input', () => {
  desktopFormInfo.msg = msgDesktop.value;
  desktopInfo = JSON.stringify(desktopFormInfo);
  localStorage.setItem('desktop_data', desktopInfo);
});

nameMobile.addEventListener('input', () => {
  mobileFormInfo.name = nameMobile.value;
  mobileInfo = JSON.stringify(mobileFormInfo);
  localStorage.setItem('mobile_data', mobileInfo);
});

emailMobile.addEventListener('input', () => {
  mobileFormInfo.email = emailMobile.value;
  mobileInfo = JSON.stringify(mobileFormInfo);
  localStorage.setItem('mobile_data', mobileInfo);
});

msgMobile.addEventListener('input', () => {
  mobileFormInfo.msg = msgMobile.value;
  mobileInfo = JSON.stringify(mobileFormInfo);
  localStorage.setItem('mobile_data', mobileInfo);
});

document.addEventListener('DOMContentLoaded', () => {
  const d_savedData = JSON.parse(localStorage.getItem('desktop_data'));
  if (d_savedData !== null) {
    nameDesktop.value = d_savedData.name;
    emailDesktop.value = d_savedData.email;
    msgDesktop.value = d_savedData.msg;
  }

  const m_savedData = JSON.parse(localStorage.getItem('mobile_data'));
  if (m_savedData !== null) {
    nameMobile.value = m_savedData.name;
    emailMobile.value = m_savedData.email;
    msgMobile.value = m_savedData.msg;
  }
});
