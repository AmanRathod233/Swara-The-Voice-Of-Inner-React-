import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CompanyLogoCarousel = () => {
  useEffect(() => {
    $('.support_company_sliding_logo').slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1000,
      arrows: false,
      dots: false,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    return () => {
      if ($('.support_company_sliding_logo').hasClass('slick-initialized')) {
        $('.support_company_sliding_logo').slick('unslick');
      }
    };
  }, []);

  const logos = [
    'company1.webp',
    'comapny2.webp',
    'company3.webp',
    'company4.webp',
    'comapny2.webp',
    'company3.webp',
    'company4.webp',
    'company1.webp',
    'comapny2.webp',
    'company3.webp',
    'company4.webp',
  ];

  return (
    <div className="col-lg-12 p-0">
      <div className="support_company_sliding_logo pt-5">
        {logos.map((logo, index) => (
          <div key={index}>
            <img src={`public/assets/Images/${logo}`} alt="company_logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogoCarousel;
