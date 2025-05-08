import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ExpertCarousel = () => {
  useEffect(() => {
    window.$ = window.jQuery = $;

    const timeout = setTimeout(() => {
      // Initialize Slick Carousel
      $('.expert_carousel').slick({
        slidesToShow: 5, // Show 5 items at a time
        slidesToScroll: 1, // Scroll 1 item at a time
        infinite: true, // Infinite loop
        arrows: true, // Show arrows for navigation
        autoplay: true, // Enable autoplay
        dots: false, // Enable dots for navigation
        autoplaySpeed: 2000, // Speed of autoplay
        speed: 1200, // Transition speed
        cssEase: 'ease-in-out', // Smooth transition easing
        prevArrow: '<button class="slick-prev">Prev</button>', // Custom prev button
        nextArrow: '<button class="slick-next">Next</button>', // Custom next button
        responsive: [
          {
            breakpoint: 1191, // For tablets and above
            settings: {
              slidesToShow: 3, // Show 3 items at once on medium screens
            },
          },
          {
            breakpoint: 991, // For tablets and above
            settings: {
              slidesToShow: 2, // Show 3 items at once on medium screens
            },
          },
          {
            breakpoint: 769, // For mobile devices
            settings: {
              slidesToShow: 1, // Show 1 item at a time on mobile
            },
          },
        ],
      });
    }, 100); // Delay to wait for DOM elements to load

    // Cleanup on component unmount
    return () => {
      clearTimeout(timeout);
      if ($('.expert_carousel').hasClass('slick-initialized')) {
        $('.expert_carousel').slick('unslick');
      }
    };
  }, []);

  return (
    <div className="carousel-container p-0">
      <div className="row m-0 expert_carousel">
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <div key={item}>
            <div className="card">
              <div className="card-image">
                <a href="#"><img src="public/assets/Images/doctor.webp" alt="doctor" /></a>
              </div>
              <div className="card-content">
                <a href="#">
                  <p className="doctor_name">Dr. John Doe</p>
                </a>
                <div className="doctor_details">
                  <a href="#">
                    <p className="name_tharapy">
                      Couple Therapy <img src="public/assets/Images/verticalline.png" alt="line" />
                    </p>
                  </a>
                  <a href="#">
                    <p className="doctor_degree">MBBS</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertCarousel;
