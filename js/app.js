$(".catalog-filter__text").ionRangeSlider({
  type: "double",
  min: 0,
  max: 120000,
  from: 2000,
  to: 102000,
  prefix: "₽",
  onStart: function (data){
    $('.catalog-filter__price-from').text(data.from);
    $('.catalog-filter__price-to').text(data.to);
  },
  onChange: function (data) {
    $('.catalog-filter__price-from').text(data.from);
    $('.catalog-filter__price-to').text(data.to);
  },
});

$('.catalog-filter__select, .catalog-content__select').styler();

$('.slider-content').slick({
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/arrow-prev.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/slider/arrow-prev.svg" alt=""></button>',
});



$('.star').rateYo({
  starWidth: "15px",
  normalFill: "#000",
  numStars: 5,

});  


