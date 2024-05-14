export const photoGallery = new Swiper('.photo-gallery-swiper', {
  
  autoplay: {
    delay: 2000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '"><img src="../../images/landing-page/slider/slider-' + (index + 1) + '.jpg"></div>';
    },
    
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
});