// ScrollToTopButton.js
import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const whatsappBtn = document.querySelector('.whatsapp_icon .whatapp_icon_link');
    const scrollBtn = document.getElementById('scrollToTopBtn');
    const homeSection = document.getElementById('home');

    // Function to handle scroll behavior
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const homeTop = homeSection.offsetTop;
      const homeHeight = homeSection.offsetHeight;
      const triggerPoint = homeTop + homeHeight * 0.8;

      // When scroll-to-top button is visible
      if (scrollY >= triggerPoint) {
        setIsVisible(true);
        whatsappBtn.style.bottom = '100px'; // Move WhatsApp button down when scroll button is visible
      } else {
        setIsVisible(false);
        whatsappBtn.style.bottom = '30px'; // Reset to original position
      }
    };

    // Function to scroll to the top
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Add event listeners
    scrollBtn?.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listeners when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
      scrollBtn?.removeEventListener('click', scrollToTop);
    };
  }, []);

  return (
    <div>
      {/* WhatsApp Icon */}
      <div className="whatsapp_icon">
        <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer" className="whatapp_icon_link">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>

      {/* Scroll to top button */}
      <a
        id="scrollToTopBtn"
        className="scroll-top-btn"
        style={{
          display: isVisible ? 'flex' : 'none',
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          height:'50px',
          width:'50px', 
          padding: '12px 16px',
          backgroundColor: '#333',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          textAlign: 'center',
          alignItems:'center',
          justifyContent:'center'
        }}
        aria-label="Scroll to Top"
      >
        <i className="fas fa-angle-up"></i>
      </a>
    </div>
  );
};

export default ScrollToTopButton;
