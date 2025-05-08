// //Expert Section Carousel//
// $(document).ready(function(){

//     $('.expert_carousel').slick({
//         slidesToShow: 5, // Adjust based on your layout
//         slidesToScroll: 1,
//         autoplay: true,// Auto-slide
//         autoplaySpeed: 2000,// Slightly faster for smooth effect
//         arrows: true,
//         dots: false,
//         infinite: true, // loop
//         adaptiveHeight: false, /* Ensure height remains constant */
//         speed: 800, /* Smooth transition */
//         cssEase: 'ease-out', /* Prevent sudden jumps */
//         responsive: [
//             {
//                 breakpoint: 991, // tab screens
//                 settings: {
//                     slidesToShow: 1, 
//                     slidesToScroll: 1
//                 }
//             },
//             {
//                 breakpoint: 1599, // large screens
//                 settings: {
//                     slidesToShow: 3, 
//                     slidesToScroll: 1
//                 }
//             },
//             {
//                 breakpoint: 1190, // large screens
//                 settings: {
//                     slidesToShow: 2, 
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//       });
//     });


// //Testimonial Section Carousel//
// $(document).ready(function () {

//     $('.testimonial_carousel').slick({
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         infinite: true,
//         arrows: true,
//         autoplay: true,
//         dots: false,
//         autoplaySpeed: 2000,
//         speed: 800,
//         cssEase: 'ease-in-out',
//         prevArrow: '<button class="slick-prev">Prev</button>',
//         nextArrow: '<button class="slick-next">Next</button>',
//         responsive: [
//             {
//                 breakpoint: 1191, // When screen width is 1191px 
//                 settings: {
//                     slidesToShow: 1, // Show 1 card per slide
//                 }
//             }
//         ]
//     });
// });




//  //Support Compant Carousel//
// $(document).ready(function(){

//     $('.support_company_sliding_logo').slick({
//         slidesToShow: 6, // Show 6 cards
//         slidesToScroll: 1, // Move 1 card 
//         infinite: true, // loop
//         arrows: true, // Enable arrows
//         autoplay: true, // Auto-slide
//         dots: false,
//         autoplaySpeed: 2000, // Slightly faster for smooth effect
//         speed:500, // Increase animation duration for smoother transition
//         cssEase: 'ease-in-out', // Smooth easing function
//         useTransform: true, // Enables smoother hardware-accelerated transitions
//         variableWidth: true, // Allow images to have auto width
//         prevArrow: '<button class="slick-prev"></button>',
//         nextArrow: '<button class="slick-next"></button>',
//         centerMode: true,

//         responsive: [
//             {
//                 breakpoint: 1199, //Screen Size 1199px
//                 settings: {
//                     slidesToShow: 5, // Show 5 slides
//                     slidesToScroll: 1
//                 }
//             },
//             {
//                 breakpoint: 992, // 992px and below
//                 settings: {
//                     slidesToShow: 3, // Show 3 slides
//                     slidesToScroll: 1
//                 }
//             },
//             {
//                 breakpoint: 600, // Mobile screens
//                 settings: {
//                     slidesToShow: 2, 
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     });
// });


// // //Sliding Review Section//
// // $(document).ready(function () {
// //     let $slider = $(".sliding_review_1");

// //     // Clone items only once for a smooth infinite loop
// //     $slider.append($slider.children().clone());
// // });

// // $(document).ready(function () {
// //     let $slider = $(".sliding_review_2");

// //     // Clone items only once for a smooth infinite loop
// //     $slider.append($slider.children().clone());
// // });

// // //Add Year in copyright section dynamically//




// //End of jquery//

// // $(document).ready(function() {
// //     $('.video-popup').magnificPopup({
// //       type: 'iframe',
// //       iframe: {
// //         patterns: {
// //           youtube: {
// //             index: 'youtube.com/', 
// //             id: 'v=', 
// //             src: 'https://www.youtube.com/embed/%id%?a=1'
// //           }
// //         }
// //       }
// //     });
// //   });




//   $(document).ready(function () {
//     const observer = new IntersectionObserver(function (entries) {
//         entries.forEach(function (entry) {
//             if (entry.isIntersecting) {
//                 const $el = $(entry.target);
//                 const countTo = parseInt($el.attr('data-count'));

//                 let current = 0;
//                 const duration = 1500;
//                 const frameRate = 60;
//                 const increment = Math.ceil(countTo / (duration / (1000 / frameRate)));

//                 // Reset to 0
//                 $el.text('0+');

//                 const counterInterval = setInterval(function () {
//                     current += increment;
//                     if (current >= countTo) {
//                         clearInterval(counterInterval);
//                         $el.text(countTo + '+');
//                     } else {
//                         $el.text(current + '+');
//                     }
//                 }, 1000 / frameRate);
//             } else {
//                 // Optional: reset when leaving view
//                 $(entry.target).text('0+');
//             }
//         });
//     }, {
//         threshold: 0.5
//     });

//     // Only observe headings inside the number section
//     $('.number_section_main_box .heading').each(function () {
//         observer.observe(this);
//     });
// });





// $(document).ready(function() {
//     // When the "Book a Free Call" button is clicked
//     $('.openForm').on('click', function(event) {
//         event.preventDefault();

//         // Show the popup form
//         $('#popupForm').fadeIn();

//         // Apply blur effect to the body, but not the popup form
//         $('body').addClass('blur-background');
//         $('#popupForm').removeClass('blur-background'); // Ensure the form doesn't get blurred
//     });

//     // Close the popup when the close button is clicked
//     $('.close-btn').on('click', function() {
//         $('#popupForm').fadeOut();

//         // Remove the blur effect
//         $('body').removeClass('blur-background');
//     });
// });
