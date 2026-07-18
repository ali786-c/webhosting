'use strict';
var theme = {

  init: function () {
    theme.mobmenu();
    theme.headerSticky();
    theme.tabbingbtn();
    theme.topbardropdown();
    theme.accordion();
    theme.swiperslider();
    theme.scrollButton();
  },


  mobmenu: function () {

  // Hamburger toggle
  $('.hamburger').on('click', function () {
    $('.menu-bar, .hamburger').toggleClass('active');
  });

  // Close menu
  $('.menu-bar').on('click', '.close-menu-btn', function () {
    $('.menu-bar, .hamburger').removeClass('active');
  });

  // Mobile dropdown toggle
  $('.menu-bar > ul > li.dropdown > a').on('click', function (e) {
    e.preventDefault();

    var $parent = $(this).parent();

    // Current dropdown toggle
    $parent.toggleClass('dropdown-active');

    // Open/close submenu normally
    $parent.find('ul').first().slideToggle(300);

    // Optional: Close other dropdowns
    $parent.siblings('.dropdown').removeClass('dropdown-active')
      .find('ul').slideUp(300);
  });

},

  headerSticky: function () {
    $(window).on('scroll', function() {
  if ($(this).scrollTop() > 150) {
    $('#header').addClass('sticky');
  } else {
    $('#header').removeClass('sticky');
  }
});
  },

  tabbingbtn: function () {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        tabPanes.forEach((pane) => pane.classList.remove("active"));
        button.classList.add("active");

        const targetTab = button.getAttribute("data-tab");
        const targetPane = document.getElementById(targetTab);
        if (targetPane) {
          targetPane.classList.add("active");
        }
      });
    });
  },

  topbardropdown: function () {
    $('.top-bar-dropdown').each(function () {
      const $dropdown = $(this);
      const $button = $dropdown.find('.dropdown-btn');
      const $menu = $dropdown.find('.dropdown-menu-two');

      $button.on('click', function (e) {
        e.stopPropagation();
        $menu.toggleClass('open');
        $('.top-bar-dropdown .dropdown-menu-two').not($menu).removeClass('open');
      });
    });

    $(document).on('click', function () {
      $('.top-bar-dropdown .dropdown-menu-two').removeClass('open');
    });
  },
  /**
   * Accordion
   */
  accordion: function () {
    $(".accordion > li:first").addClass("active").find("p").slideDown();
    $('.accordion li').on('click', function () {
      var dropDown = $(this).find("p");

      $(this).closest(".accordion").find("p").not(dropDown).slideUp();

      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $(this).closest(".accordion").find("li.active").removeClass("active");
        $(this).addClass("active");
      }

      dropDown.stop(false, true).slideToggle();
    });
  },

  /**
   * Swiper Slider
   */
  swiperslider: function() {
    new Swiper('.swiper-testimonial', {
      speed: 1000,
      loop: false,
       navigation: {
    nextEl: '.swiper-testimonilas-right',
    prevEl: '.swiper-testimonilas-left',
  },
      slidesPerView: 'auto',  
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        575: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 1,
          spaceBetween: 25
        }
      }
    });

    new Swiper('.swiper-homepage-product', {
      speed: 1000,
      loop: false,
       navigation: {
        nextEl: '.swiper-product-right',
        prevEl: '.swiper-product-left',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      slidesPerView: 'auto',  
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        575: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 25
        }
      }
    });
    new Swiper('.swiper-homepage-product.two', {
      speed: 1000,
      loop: false,
       navigation: {
        nextEl: '.swiper-product-right',
        prevEl: '.swiper-product-left',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      slidesPerView: 'auto',  
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        575: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 25
        }
      }
    });

  },
  
scrollButton: function () {

    var $scrollTop = $('.scroll-top');

    if ($scrollTop.length) {

      var toggleScrollTop = function () {

        $(window).scrollTop() > 100 ? $scrollTop.addClass('active') : $scrollTop.removeClass('active');

      };

      $(window).on('load', toggleScrollTop);

      $(document).on('scroll', toggleScrollTop);

    }



    $("#scrolltoTop").click(function () {

      $("html").animate({

        scrollTop: 0

      }, "slow");

    });

  },



  getCookie: function (name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },

  setCookie: function (name, value, minutes) {
    var expires = "";
    if (minutes) {
      var date = new Date();
      date.setTime(date.getTime() + (minutes * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  },








};

// Initialize the theme
document.addEventListener('DOMContentLoaded', function () {
  theme.init();
});
