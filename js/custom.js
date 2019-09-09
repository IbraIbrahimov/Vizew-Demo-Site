// var timer;

// function startCount() {
//     timer = setInterval(count, 100); // 200 = 200ms delay between counter changes. Lower num = faster, Bigger = slower.
// }

// function count() {
//     var rand_no = Math.ceil(9 * Math.random()); // 9 = random decrement amount. Counter will decrease anywhere from 1 - 9.
//     var el = document.querySelectorAll('#counter');
//     var currentNumber = parseFloat(el.innerHTML);
//     var newNumber = currentNumber - rand_no;
//     if (newNumber > 0) {
//         el.innerHTML = newNumber;
//     } else {
//         el.innerHTML = "200"; // This message is displayed when the counter reaches zero.
//     }
// }


(function ($) {
    'use strict';

    var browserWindow = $(window);

    // :: 1.0 Preloader Active Code
    browserWindow.on('load', function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: 2.0 Nav Active Code
    if ($.fn.classyNav) {
        $('#menu-navbar').classyNav();
    }

    

    // :: 4.0 Sticky Active Code
    if ($.fn.sticky) {
        $("#main-menu").sticky({
            topSpacing: 0
        });
    }

  

    // :: 6.0 Nicescroll Active Code
    if ($.fn.niceScroll) {
        $(".nav-tab").niceScroll({
            cursorcolor: "#838586",
            cursorwidth: "6px",
            cursorborder: 'none'
        });
    }

    // :: 7.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        browserWindow.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="ti-angle-up"></i>'
        });
    }

    // :: 8.0 Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // :: 9.0 CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });
    }

    // :: 10.0 Prevent Default a Click
    $('a[href="#"]').on('click', function (e) {
        e.preventDefault();
    });

    // :: 11.0 Wow Active Code
    // if (browserWindow.width() > 767) {
    //     new WOW().init();
    // }

})(jQuery);