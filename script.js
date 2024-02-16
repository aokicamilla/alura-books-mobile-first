const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 10,
  slidesPerView: 3,

  pagination: {
  el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});
