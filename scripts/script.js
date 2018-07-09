// // open mobile menu
// $('.js-toggle-menu').click(function(e){
//     e.preventDefault();
//     $('.mobile-header-nav').slideToggle();
//     $(this).toggleClass('open');
//   });

const $hamburger = $('.hamburger-menu');
const $bar = $('.bar');
const $body = $('body');
const $mobile = $('.container');

$hamburger.click(showMenu);
function showMenu(){
    $body.toggleClass('show');
    $mobile.fadeToggle();
    $bar.toggleClass('animate');
}