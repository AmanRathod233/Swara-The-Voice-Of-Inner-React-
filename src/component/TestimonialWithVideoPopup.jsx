import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'magnific-popup/dist/magnific-popup.css';
import 'magnific-popup';

const TestimonialCarousel = () => {
  useEffect(() => {
    window.$ = window.jQuery = $;

    const timeout = setTimeout(() => {
      $('.testimonial_carousel').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        autoplay: true,
        dots: false,
        autoplaySpeed: 2000,
        speed: 800,
        cssEase: 'ease-in-out',
        prevArrow: '<button class="slick-prev">Prev</button>',
        nextArrow: '<button class="slick-next">Next</button>',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });

      $('.video-popup').magnificPopup({
        type: 'iframe',
        iframe: {
          patterns: {
            youtube: {
              index: 'youtube.com/',
              id: 'v=',
              src: 'https://www.youtube.com/embed/%id%?autoplay=1',
            },
          },
        },
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      if ($('.testimonial_carousel').hasClass('slick-initialized')) {
        $('.testimonial_carousel').slick('unslick');
      }
    };
  }, []);

  return (
    <div className="carousel-container container">
      <div className="testimonial_carousel">
        {[1, 2, 3, 4].map((item) => (
          <div className="px-2" key={item}>
            <div className="card">
              <img
                src="public/assets/Images/a74faf896b6c27eef17ef3c34874f97c_11zon.webp"
                alt="Card image"
                className="card-img-top"
              />
              <div className="card-img-overlay text-end">
                <h4 className="card-title m-0">Amit Srivastav</h4>
                <p className="card-text m-0">Finally, someone who listens!</p>
                <p className="card-text m-0">Relationship is healthier than ever.</p>
              </div>
              <a className="video-popup" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <div className="play_icon">
                  <img src="public/assets/Images/play.svg" alt="play_btn" />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
