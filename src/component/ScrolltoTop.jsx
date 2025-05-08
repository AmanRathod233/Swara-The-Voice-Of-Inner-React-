import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll smoothly to the top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]); // Trigger the effect whenever the route changes

  return null;
}

export default ScrollToTop;
