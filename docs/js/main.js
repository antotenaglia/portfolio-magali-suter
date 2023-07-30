jQuery(document).ready(function ($) {
  // Header fixed and Back to top and Whatsapp button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
      $("#whatsapp").fadeIn("slow");
      $("#header").addClass("header-fixed");
    } else {
      $(".back-to-top").fadeOut("slow");
      $("#whatsapp").fadeOut("slow");
      $("#header").removeClass("header-fixed");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000,
      "easeInOutExpo"
    );
    return false;
  });

  // Initiate the wowjs
  new WOW().init();

  // Initiate superfish on nav menu
  $(".nav-menu").superfish({
    animation: {
      opacity: "show",
    },
    speed: 400,
  });

  // Mobile Navigation
  if ($("#nav-menu-container").length) {
    var $mobile_nav = $("#nav-menu-container").clone().prop({
      id: "mobile-nav",
    });
    $mobile_nav.find("> ul").attr({
      class: "",
      id: "",
    });
    $("body").attr({"data-bs-target": "#nav-menu-container"});
    $("body").append($mobile_nav);
    $("body").prepend(
      '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>'
    );

    $(document).on("click", "#mobile-nav-toggle", function (e) {
      $("body").toggleClass("mobile-nav-active");
      // $("body data-bs-target").toggle("#mobile-nav #nav-menu-container");
      // $("body").attr({"data-bs-target": "#mobile-nav"});
      // $("body").toggleAttr("disabled");
      $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
    });

    // $(document).click(function (e) {
    //   var container = $("#mobile-nav, #mobile-nav-toggle");
      
    //   console.log(e.target);
    //   console.log((!container.is(e.target))); //true
      
    //   console.log(container.has(e.target)) 
    //   console.log(container.has(e.target).length) //1
    //   console.log(container.has(e.target).length === 0); //false

    //   if (!container.is(e.target) && container.has(e.target).length === 0) { //false
    //     // no se cuando entra porque es falso...
    //     if ($("body").hasClass("mobile-nav-active")) {
    //       $("body").removeClass("mobile-nav-active");
    //       $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
    //     }
    //   }
    // });
  } 
  //nunca entra , no se para que está
  // else if ($("#mobile-nav, #mobile-nav-toggle").length) {
  //   $("#mobile-nav, #mobile-nav-toggle").hide();
  // }

  // Smoth scroll on page hash links
  $('a[href*="#"]:not([href="#"])').on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($("#header").length) {
          top_space = $("#header").outerHeight();

          if (!$("#header").hasClass("header-fixed")) {
            top_space = top_space - 20;
          }
        }

        $("html, body").animate(
          {
            scrollTop: target.offset().top - top_space,
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".nav-menu").length) {
          $(".nav-menu .menu-active").removeClass("menu-active");
          $(this).closest("li").addClass("menu-active");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
        }
        return false;
      }
    }
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000,
  });
});
