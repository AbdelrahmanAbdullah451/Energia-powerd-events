/*global $, alert , console */

var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
function openNav() {
  document.getElementById("mySidenav").style.width = "25%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$(function () {
    'use strict';
   $('.n-lin').css('paddingTop', ($('.header').height()-$('.n-lin').height())/2.5 ); 
    
    $(window).on('resize', function () {
        
      $('.n-lin').css('paddingTop', ($('.header').height()-$('.n-lin').height())/2.5 ); 
        
    });
    
});