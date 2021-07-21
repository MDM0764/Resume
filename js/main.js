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
     if($(".row timeline").is(":visible")){
          console.log(2);
     }
});