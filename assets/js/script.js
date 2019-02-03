(function($) {
  "use strict"

  //for swiper slider
  new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });

  //for smooth scroll
  $('html').smoothScroll(300);

  //for jump_up button
  $(window).scroll(function () {
      const heroHeight = $('.navbar_slider_section').outerHeight(true);
      const scrolltop = $(window).scrollTop();

      if (scrolltop > heroHeight) {
          $('.jump_up').css('display', 'inline-block');
      } else {
          $('.jump_up').css('display', 'none');
      }
  });

})(jQuery);