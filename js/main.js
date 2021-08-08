$(window).scroll(function() {
     $('nav').toggleClass('scrolled', $(this).scrollTop() > $('#navigation').height()-50);
});

displayNavbar = function () {
     $('nav').toggleClass('scrolled', $(this).scrollTop() > $('#navigation').height()-50);
}

$(window).on("load", function(){
     $(".loader-wrapper").fadeOut("slow");
});

$(window).scroll(function() {
     $('.fa-lg').toggleClass('color', $(this).scrollTop() < 140);
});

$(window).scroll(function() {
     if ($(this).scrollTop() < 140) { 
          $('#str').find('a').css('color','#45a29e');
     } else {
          $('#str').find('a').css('color', '');
     }    
});

$(document).ready(function () {
     $('.fa-lg').toggleClass('color', $(this).scrollTop() < 140);
     $('nav').toggleClass('scrolled', $(this).scrollTop() > $('#navigation').height()-50);
     if ($(this).scrollTop() < 140) { 
          $('#str').find('a').css('color','#45a29e');
     } else {
          $('#str').find('a').css('color', '');
     }  
});