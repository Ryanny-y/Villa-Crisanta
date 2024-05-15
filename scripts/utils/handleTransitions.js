export const hamburger = () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const xMark = document.querySelector('.x-mark');
  const headerNav = document.querySelector('.header-nav');

  hamburgerMenu.addEventListener('click', () => {
    headerNav.classList.toggle('active');
  });

  xMark.addEventListener('click', () => {
    headerNav.classList.toggle('active');
  });
  
};

export const headerBgTransition = () => {
  const scrolled = window.scrollY;
  const header = document.querySelector('header');

  if(scrolled >= 600) {
      header.style.background = "#202020f2";      
      header.style.transition = ".5s";  
  } else {
      header.style.background = "transparent";
  }
};