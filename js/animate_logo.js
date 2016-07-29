var edu = $("#edu");
var pandl =  $("#pandl");
var pedul_logo = $("#pedul_logo_container");
var nav_bar = $(".navbar.navbar-default.navbar-fixed-top");
var intro_text = $(".intro-text");
var pedul_head = $("a.page-scroll.log");
var nav_logo = $("#nav-logo");
var background_image = $("header");
var tag_line = $(".intro-heading");

pedul_head.hide();
intro_text.hide();
edu.hide();
pandl.hide();
nav_bar.hide();
nav_logo.hide();
background_image.hide();

$(document).ready(function() {
  $("div").removeClass("hidden");
  $("h2").removeClass("hidden");
  $("a").removeClass("hidden");
//  $("img").addClass("edupng");
//  $("img").addClass("pandl");
  $("a").addClass("page-scroll log");
  $("h2").addClass("intro-heading");
  
  $(".clear").addClass("animated shake");

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-69013201-1', 'auto');
  ga('send', 'pageview');

  edu.fadeIn(1500);
  setTimeout(function(){
    pandl.fadeIn(1000);
  }, 1200);
  
  setTimeout(function(){
    pandl.fadeOut(800);
    edu.fadeOut(1500);
  },3500);

  setTimeout(function(){
    pedul_logo.fadeOut(1000);
  }, 5500);
    
  setTimeout(function(){
    pedul_head.fadeIn(1900);
    intro_text.fadeIn(1900);  
  }, 5500);

  setTimeout(function(){
    background_image.fadeIn(7000);
    pedul_head.fadeIn(1900);
    nav_bar.fadeIn(1900);
    tag_line.fadeIn(1000);
    nav_logo.fadeIn(1000);
  }, 6000);

});
