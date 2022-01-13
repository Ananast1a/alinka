// var slideIndex = 1;
// let autoplayInterval = null;

// function plusSlide() {
//     showSlides(slideIndex += 1);
// }

// function showSlides(n) {
//     var i;
//     var slides = $(".js-banner-image");

//     if (n > slides.length) {
//       slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//     $($(slides).addClass('d-none'));
//     $($(slides).get(slideIndex - 1)).removeClass("d-none");
// }


// function startAutoplay() {
//   if (!autoplayInterval) {
//     autoplayInterval = setInterval(plusSlide, 2000);
//   }
// }


// window.onload = function() {
//     startAutoplay();
// };