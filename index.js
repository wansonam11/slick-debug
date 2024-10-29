//mv
$(document).ready(function () {
  const mv_swiper = new Swiper(".js-slider-mv.swiper", {
    loop: true,
    effect: "fade",
    speed: 1000,
    autoplay: {
      delay: 2000,
    },
    fadeEffect: {
      crossFade: true,
    },
  });
});

//point
$(window).on("load", function () {
  const pointSwiper = new Swiper(".js-slider-point.swiper", {
    //autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 16,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".point .swiper-pagination",
      type: "progressbar",
      clickable: true,
    },
    navigation: {
      nextEl: ".point .swiper-button-next",
      prevEl: ".point .swiper-button-prev",
    },
    breakpoints: {
      1025: {
        slidesPerView: 1.2,
        spaceBetween: 80,
      },
      641: {
        slidesPerView: 1.2,
        spaceBetween: 32,
      },
    },
    on: {
      init: function () {
        this.updateAutoHeight(0); // 初期化時に高さを再計算
      },
      resize: function () {
        this.updateAutoHeight(0); // リサイズ時に高さを再計算
      },
    },
  });
});
//works
$(document).ready(function () {
  const works_Swiper = new Swiper(".js-slider-works.swiper", {
    loop: true,
    speed: 1500,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 16,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".works .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".works .swiper-button-next",
      prevEl: ".works .swiper-button-prev",
    },
  });
});
/*----- ナビゲーション -----*/
$(function () {
  var $header = $(".header");
  $(".header__toggle").click(function () {
    $header.toggleClass("open");
  });
  $("header nav a[href]").on("click", function (event) {
    $(".header__toggle").trigger("click");
  });
});
