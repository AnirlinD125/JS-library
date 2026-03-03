// glide js

new Glide('.glide').mount();
// cursor js
new kursor({
            type: 1,
            color: "#ffffff",
        });
// price js
 AOS.init();
//  text animation
murphy.play()

lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })

$(document).ready(function(){
  $('.gallery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true
  });
});