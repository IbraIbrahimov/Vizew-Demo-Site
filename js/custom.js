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

    //  1.0 Preloader Active Code
    browserWindow.on('load', function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    //  Nav Active Code
    if ($.fn.classyNav) {
        $('#menu-navbar').classyNav();
    }

    

    //   Sticky Active Code
    if ($.fn.sticky) {
        $("#main-menu").sticky({
            topSpacing: 0
        });
    }

    if ($.fn.simpleTicker) {
        $.simpleTicker($("#newsTicker"), {
            speed: 1000,
            delay: 3000,
            easing: 'swing',
            effectType: 'roll'
        });
    }

    //  Nicescroll Active Code
    if ($.fn.niceScroll) {
        $(".nav-tab").niceScroll({
            cursorcolor: "#838586",
            cursorwidth: "6px",
            cursorborder: 'none'
        });
    }

    // ScrollUp Active Code
    if ($.fn.scrollUp) {
        browserWindow.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="ti-angle-up"></i>'
        });
    }

    //  Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    //  CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });
    }

    //  Prevent Default a Click
    $('a[href="#"]').on('click', function (e) {
        e.preventDefault();
    });

    //  Wow Active Code
    // if (browserWindow.width() > 767) {
    //     new WOW().init();
    // }

    // Burger menu active code
$(".burger-menu").click(function(event){

    var btn=$(event.currentTarget);
    var toggler=$(btn).find('.navbar-toggler');
    var classyMenu=$('.classy-menu');
    

if($(toggler).hasClass('active')){
    $(toggler).removeClass('active');
    $(classyMenu).removeClass('menu-on');
    
    
}
else{
    $(toggler).addClass('active');
    $(classyMenu).addClass('menu-on');
    
}

})

$('.cross-wrap').click(function(){

    var burgerMenu=$('.navbar-toggler');

    $(burgerMenu).removeClass('active');
  
    })
    

$('.dd-trigger').click(function(e){
    let currentItem=e.currentTarget;
    let dropdownLink=currentItem.parentNode;
    let ul=currentItem.previousSibling.previousSibling;
    

    if($(dropdownLink).hasClass('active') ){

        $(dropdownLink).removeClass('active');
        
        $(ul).css('display','none');
        
    }else{
        $(dropdownLink).addClass('active');
        $(ul).css('display','block')
       
    }


})







function change(e) {
    //974
    let bodyWidth=parseInt($(document.body).css('width').replace('px',''));
    var menuNavContainer=$('.menu-nav-container');

    if(bodyWidth<=974){ 
        $(menuNavContainer).addClass('breakpoint-on');
       $(menuNavContainer).removeClass('breakpoint-off');      
    }
    else{
        $(menuNavContainer).addClass('breakpoint-off');
        $(menuNavContainer).removeClass('breakpoint-on');     
    }    
  }

$(window).resize(change);

change();








})(jQuery);

// Validation form
$(document).ready(function(){


    let validName= false;
    let validEmail=false;
    let validPass=false;
    
    $('form').submit(function(e){
    
    e.preventDefault();
    
    let name = $('#name').val();
    let email= $('#email').val();
    let exampleEmail=$('#example-email1').val();
    let examplePass= $('#example-pass1').val();
    
    if(!name){
    
        $("#name").css({'border': '2px solid red'});
        
    }
    else{$("#name").css({'border': 'none'});
        validName= true;
    }
    
    
    if(email==''){
        $("#email").css({ 'border': '2px solid red'});
       
    }
    else{$("#email").css({'border': 'none'});
        validEmail= true;
    }
        
    
    
          if(exampleEmail == ''){
    
            $("#example-email1").css({'border': '2px solid red'});
          
        }
        else{ $("#example-email1").css({'border': 'none'});
                    validEmail = true;
        }
        
        
        if(examplePass==''){
            $("#example-pass1").css({ 'border': '2px solid red'});
           
        }
        else{
            $("#example-pass1").css({ 'border': 'none'});
            validPass=true;
        }
            
    if( (validName == true && validEmail == true) || (validPass==true && validEmail == true)){

            $('form').onbind('submit').submit();
    }
    
    
    
    });


});
  