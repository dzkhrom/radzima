$(document).ready(function(){

/* PARALLAX EFFECT */
jQuery(window).trigger('resize').trigger('scroll');

/* hidden top-header scrolling */

var h_hght = 80; // высота шапки
var h_mrg = 0;     // отступ когда шапка уже не видна
$(function(){
 $(window).scroll(function(){
    var top = $(this).scrollTop();
    var elem = $('.header-top');
    if (top >= h_hght) {
     elem.css('display', "none");
    } else {
     elem.css('display', "block");
    }
  });

});

/* points on region map */

/* $(function(){
  $("a.third-object-link").mouseover(function(){
  $(".pyslovskie").css("fill", "#ba1e1e");
});
$("a.third-object-link").mouseout(function(){
$(".pyslovskie").css("fill", "#535d6c");
});
}); */



$("a.first-object-link").hover(
    function(){
        $(".brest-castle").addClass("red");},
    function(){
        $(".brest-castle").removeClass("red");
    });
$("a.second-object-link").hover(
    function(){
        $(".byalovezha").addClass("red");},
    function(){
        $(".byalovezha").removeClass("red");
    });
$("a.third-object-link").hover(
    function(){
        $(".pyslovskie").addClass("red");},
    function(){
        $(".pyslovskie").removeClass("red");
    });
$("a.fourth-object-link").hover(
    function(){
        $(".ryzhany").addClass("red");},
    function(){
        $(".ryzhany").removeClass("red");
    });
$("a.fifth-object-link").hover(
    function(){
        $(".dostoevskie").addClass("red");},
    function(){
        $(".dostoevskie").removeClass("red");
    });


/* MAP on guide page */

    $(".brest-region").hover(
        function(){
            $("#BLR2338").addClass("st1");},
        function(){
            $("#BLR2338").removeClass("st1");
        });
    $(".vitebsk-region").hover(
        function(){
            $("#BLR2341").addClass("st1");},
        function(){
            $("#BLR2341").removeClass("st1");
        });
    $(".gomel-region").hover(
        function(){
            $("#BLR2339").addClass("st1");},
        function(){
            $("#BLR2339").removeClass("st1");
        });
    $(".grodno-region").hover(
        function(){
            $("#BLR2344").addClass("st1");},
        function(){
            $("#BLR2344").removeClass("st1");
        });
    $(".mogilev-region").hover(
        function(){
            $("#BLR2340").addClass("st1");},
        function(){
            $("#BLR2340").removeClass("st1");
        });
    $(".minsk-region").hover(
        function(){
            $("#BLR2345, #BLR4825").addClass("st1");},
        function(){
            $("#BLR2345, #BLR4825").removeClass("st1");
        });

        /* MOBILE MENU BUTTON */

        $(window).resize(function() {
        if ( $(window).width() > 991 ) {
          $('.header-bottom .main-menu>ul').css('visibility', 'visible');
        }
        else {
          $('.header-bottom .main-menu>ul').css('visibility', 'hidden');
        }
      });

    $(".mobile-menu-button").click(function() {
      var menuBlock = $('.header-bottom .main-menu>ul');
      var isMenuBlockHidden = $('.header-bottom .main-menu>ul').css('visibility') === "hidden";
      if (isMenuBlockHidden) {
        menuBlock.css('visibility','visible');
        $('#rect-1, #rect-2').css('visibility','hidden');
        $('#rect-3').addClass('st-rotate-1');
        $('#rect-4').addClass('st-rotate-2');
        }
      else {
        menuBlock.css('visibility','hidden');
        $('#rect-1, #rect-2').css('visibility','visible');
        $('#rect-3').removeClass('st-rotate-1');
        $('#rect-4').removeClass('st-rotate-2');
      }

    });

});
