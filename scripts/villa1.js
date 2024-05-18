import { hamburger, headerBgTransition } from "./utils/handleTransitions.js";
import { roomsSwiper } from './utils/swiper.js';
import { handleRequest, oauthSignIn } from "./backend/sign-in.js";
import { villaSpreadSheet } from "./backend/spreadsheet.js";
import { termsAndCondition } from "./utils/terms-condition.js";

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loader").style.display = "none";
  }, 5000);

  // window event
  window.addEventListener('scroll', headerBgTransition);

  // hamburger menu
  hamburger();

  // FORSIGN IN
  const signInBtn = document.querySelector('.sign-inbtn');
  signInBtn.addEventListener('click', oauthSignIn);
  
  handleRequest(signInBtn, 'villa-1');

  // Terms and Conditions
  termsAndCondition();

  function logout() {
    // Clear OAuth information from localStorage
    localStorage.removeItem('authInfo');
    
    // Redirect to Google logout URL
    window.location.href = 'https://villacrisanta-111.netlify.app/villa-1.html';
  }


  // SPREAD SHEET
  document.getElementById("form").addEventListener("submit", villaSpreadSheet);
  

  // SWIPERS
  roomsSwiper;
});