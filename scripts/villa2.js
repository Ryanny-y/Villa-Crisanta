import { hamburger, headerBgTransition } from "./utils/handleTransitions.js";
import { roomsSwiper } from './utils/swiper.js';
import { handleRequest, oauthSignIn } from "./backend/sign-in.js";
import { villaSpreadSheet } from "./backend/spreadsheet.js";

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loader").style.display = "none";
  }, 3000);

  // window event
  window.addEventListener('scroll', headerBgTransition);

  // hamburger menu
  hamburger();

  // FORSIGN IN
  const signInBtn = document.querySelector('.sign-inbtn');
  signInBtn.addEventListener('click', oauthSignIn);
  // const logoutBtn = document.querySelector('.logout-btn');
  // logoutBtn.addEventListener('click', logout);
  
  handleRequest(signInBtn, 'villa-2');

  function logout() {
    // Clear OAuth information from localStorage
    localStorage.removeItem('authInfo');
    
    // Redirect to Google logout URL
    window.location.href = 'https://villacrisanta-111.netlify.app/villa-2.html';
  }
  
  // SPREAD SHEET
  document.getElementById("form").addEventListener("submit", villaSpreadSheet);
  

  // SWIPERS
  roomsSwiper;
});