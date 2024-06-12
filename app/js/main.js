$(function () {
  $(".header__btn").on("click", function () {
    $(".rightside-menu").css("transform", "translateX(0)");
  });

  $(".rightside-menu__close").on("click", function () {
    $(".rightside-menu").css("transform", "translateX(100%)");
  });

  $(".top__slider").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".article-slide__box").slick({
    prevArrow:
      '<button type="button" class="article-slide__arrow article-slide__arrowleft"><img src="images/arrow-left.svg" alt="arrow"></button>',
    nextArrow:
      '<button type="button" class="article-slide__arrow article-slide__arrowright"><img src="images/arrow-right.svg" alt="arrow"></button>',
  });

  $(".contact-slider").slick({
    slidesToShow: 10,
    slidesToScroll: 10,
    dots: true,
    arrows: false,
  });

  var mixer = mixitup(".gallery__inner", {
    load: {
      filter: ".living",
    },
  });
});
