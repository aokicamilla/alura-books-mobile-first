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

document.addEventListener('click', function(event) {
  var checkbox = document.querySelector('.opcoes__botao');
  var label = document.querySelector('.opcoes__label');

  // Verifica se o clique foi dentro ou fora da caixa de opções
  if (label.contains(event.target) || checkbox.contains(event.target)) {
    // Clique dentro da caixa de opções ou no próprio checkbox, marca/desmarca o checkbox
    checkbox.checked = !checkbox.checked;
  } else {
    // Clique fora da caixa de opções e do checkbox, desmarca o checkbox
    checkbox.checked = false;
  }
});