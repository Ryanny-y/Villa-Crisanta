const photoGallery = new Swiper('.photo-gallery-swiper', {
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '"><img src="../images/landing-page/villa-' + (index + 1) + '.jpg"></div>';
    },
    
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});