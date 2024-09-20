/*
  Theme Name: Agoora | Agriculture & Farming HTML Template
  Author: Capricorn_Theme
  Creation Date: 25 Sept 2024
  Version: 1.0
*/

/* [Table of Contents]

* 01. Mobile Menu 
  02. Search Form 
  03. Owl Carousel
        - Hero Area Slider
        - Service Slider 
		- Testimonial Slider
		- Clients Slider
  04. Sticky Area 
  05. Progress Bar
  06. Counter Up 
  07. Isotope 
  08. Wow Animation 
  09. Scroll to the Top
  10. Magnific Pop-up
  11. Active & Remove Class
  12. Menu Active Color
  13. Preloader 

*/
(function ($) {
  "use strict";

  // Mobile Menu

  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".navbar-nav li a").on("click", function () {
    $(".sub-nav-toggler").removeClass("active");
  });

  var subMenu = $(".navbar-nav .sub-menu");

  if (subMenu.length) {
    subMenu
      .parent("li")
      .children("a")
      .append(function () {
        return '<button class="sub-nav-toggler"> <i class="fa fa-angle-down"></i> </button>';
      });

    var subMenuToggler = $(".navbar-nav .sub-nav-toggler");

    subMenuToggler.on("click", function () {
      $(this).parent().parent().children(".sub-menu").slideToggle();
      return false;
    });
  }

  //Header Search Form

  if ($(".search-trigger").length) {
    $(".search-trigger").on("click", function () {
      $("body").addClass("search-active");
    });
    $(".close-search, .search-back-drop").on("click", function () {
      $("body").removeClass("search-active");
    });
  }

  //Home Page Slide

  $(".homepage-slides").owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    slideSpeed: 600,
    animateOut: "fadeOut",
    navText: [
      "<i class='la la-angle-left'></i>",
      "<i class='la la-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false,
      },
      600: {
        items: 1,
        nav: false,
        dots: false,
      },
      768: {
        items: 1,
        nav: false,
        dots: false,
      },
      1100: {
        items: 1,
        nav: true,
        dots: false,
      },
    },
  });

  $(".homepage-slides").on("translate.owl.carousel", function () {
    $(".single-slide-item h1")
      .removeClass("animated fadeInUp")
      .css("opacity", "1");
    $(".single-slide-item h6")
      .removeClass("animated fadeInDown")
      .css("opacity", "1");
    $(".single-slide-item p")
      .removeClass("animated fadeInDown")
      .css("opacity", "1");
    $(".single-slide-item a.main-btn")
      .removeClass("animated fadeInDown")
      .css("opacity", "1");
  });

  $(".homepage-slides").on("translated.owl.carousel", function () {
    $(".single-slide-item h1")
      .addClass("animated fadeInUp")
      .css("opacity", "1");
    $(".single-slide-item h6")
      .addClass("animated fadeInDown")
      .css("opacity", "1");
    $(".single-slide-item p")
      .addClass("animated fadeInDown")
      .css("opacity", "1");
    $(".single-slide-item a.main-btn")
      .addClass("animated fadeInDown")
      .css("opacity", "1");
  });

  // Service Slider

  $(".service-slider").owlCarousel({
    items: 1,
    margin: 30,
    dots: true,
    nav: false,
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    responsiveClass: true,
    responsive: {
      575: {
        items: 1,
        nav: false,
        dots: false,
      },

      767: {
        items: 2,
        nav: false,
      },

      990: {
        items: 3,
        loop: true,
      },
      1200: {
        items: 3,
        dots: true,
        loop: true,
      },
    },
  });

  // Testimonial Carousel

  $(".team-carousel").owlCarousel({
    items: 1,
    margin: 30,
    dots: true,
    nav: false,
    loop: true,
    autoplay: true,
    smartSpeed: 700,
    responsiveClass: true,
    responsive: {
      575: {
        items: 1,
        nav: false,
        dots: false,
      },

      767: {
        items: 2,
        nav: false,
      },

      990: {
        items: 2,
        loop: true,
      },
      1200: {
        items: 3,
        dots: true,
        loop: true,
      },
    },
  });

  // Clients Slider
  $("#clients-slider").owlCarousel({
    loop: true,
    items: 5,
    dots: false,
    nav: false,
    autoplayTimeout: 10000,
    smartSpeed: 700,
    autoHeight: false,
    touchDrag: true,
    mouseDrag: true,
    margin: 30,
    autoplay: true,
    slideSpeed: 600,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false,
      },
      600: {
        items: 1,
        nav: false,
        dots: false,
      },
      768: {
        items: 3,
        nav: false,
        dots: false,
      },
      1100: {
        items: 5,
        nav: false,
        dots: false,
      },
    },
  });

  // Sticky Area
  $(".sticky-area").sticky({
    topSpacing: 0,
  });

  //Progress Bar JS

  $("#bar1").barfiller({
    barColor: "#FFD857",
    duration: 5000,
  });

  $("#bar2").barfiller({
    barColor: "#FFD857",
    duration: 6000,
  });

  $("#bar3").barfiller({
    barColor: "#FFD857",
    duration: 7000,
  });

  $("#bar4").barfiller({
    barColor: "#FFD857",
    duration: 5000,
  });

  $("#bar5").barfiller({
    barColor: "#FFD857",
    duration: 6000,
  });

  $("#bar6").barfiller({
    barColor: "#FFD857",
    duration: 7000,
  });

  //Counter Up

  $(".counter-number h6").counterUp({
    delay: 10,
    time: 1000,
  });

  //Isotope Filter

  $(".port-menu li").on("click", function () {
    var selector = $(this).attr("data-filter");

    $(".port-menu li").removeClass("active");

    $(this).addClass("active");

    $(".portfolio-list").isotope({
      filter: selector,
      percentPosition: true,
    });
  });

  //Wow Animation
  new WOW().init();

  // SCROLLTO THE TOP

  // Show or hide the sticky footer button
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 6000) {
      $(".go-top").fadeIn(200);
    } else {
      $(".go-top").fadeOut(200);
    }
  });

  // Animate the scroll to top
  $(".go-top").on("click", function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

  //Magnific Pop-up

  $(".video-play-btn").magnificPopup({
    type: "iframe",
  });

  // Active & Remove Class

  $(".single-service-area").on("mouseover", function () {
    $(".single-service-area").removeClass("active");
    $(this).addClass("active");
  });

  // Menu Active Color

  $(".main-menu .navbar-nav .nav-link").on("mouseover", function () {
    $(".main-menu .navbar-nav .nav-link").removeClass("active");
    $(this).addClass("active");
  });

  // Preloader
  setTimeout(function () {
    $("#loader").fadeOut(200);
  }, 200);

  $(window).on("load", function () {
    $(".portfolio-list").isotope({
      layoutMode: "masonry",
    });
  });

  jQuery(window).on("load", function () {
    jQuery(".site-preloader-wrap, .slide-preloader-wrap").fadeOut(1000);
  });
})(jQuery);
