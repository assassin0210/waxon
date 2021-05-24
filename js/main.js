$(function(){
  $('.intro_slider').slick({
    adaptiveHeight:true,
    accessibility: false,
    slidesToShow: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    responsive: [{
      brealpoint: 768,
      settings : {}
    }]
  });

});