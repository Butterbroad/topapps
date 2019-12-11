$(function(){

  $('.screenshots__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
  });

  $('input[type="file"], select').styler();
      
});