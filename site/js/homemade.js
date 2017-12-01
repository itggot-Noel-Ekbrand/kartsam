$(function(){
    $("#ico_2").fadeOut()
      $(window).scroll(function () {
var scrollh = $(this).scrollTop();
if (scrollh == 0) {
    $("nav").css({
      'transition':'0.5s' , 'height':'100px;' , 
    });
    $(".log_sz").css({
      'height':'100px;' , 'width':'100px',
    });
} else {
    $("nav").stop().css({
       'transition':'0.5s' , 'height':'65px',
    });
    $(".log_sz").css({
      'height':'0px;' , 'width':'0px' ,
    });
}
});
$("#button2").click(function() {
$('html, body').stop().animate({
    scrollTop: $("#art2").offset().top - "65" + "px"
}, 1000);
$("#button3").click(function() {
$('html, body').stop().animate({
    scrollTop: $("#art3").offset().top - "65" + "px"
}, 1000);
});
  });