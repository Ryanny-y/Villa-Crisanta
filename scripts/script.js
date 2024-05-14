import { hamburger, headerBgTransition } from "./utils/handleTransitions.js";
import { photoGallery } from "./utils/swiper.js";

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loader").style.display = "none";
  }, 3000);

  // window event
  window.addEventListener('scroll', headerBgTransition);

  // hamburger menu
  hamburger();

  // SWIPERS
  photoGallery;
});
