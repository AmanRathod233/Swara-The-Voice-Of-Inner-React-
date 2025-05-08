import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ScrollToTopButton from './ScrollToTopButton';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  // useEffect(() => {
  //   if (window.location.hash === '') {
  //     window.scrollTo(0, 0);
  //   }
  // }, [location]);
  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <Link to="/">
              <img src="public/assets/Images/swaralogo.svg" alt="footer_logo" />
            </Link>
            <p className="footer_logo_content m-0">
              Healing starts with a conversation—let's make<br />
              mental wellness a priority, together.
            </p>
            <div className="footer_contact_detail">
              <p><a href="mailto:swara@gmail.com"><i className="fa fa-envelope"></i>swara@gmail.com</a></p>
              <p><a href="tel:1-333-345-6868"><i className="fa fa-phone"></i>1-333-345-6868</a></p>
            </div>
            <div className="footer_subscribe">
              <input type="email" placeholder="Enter Your Email" />
              <button type="submit">Subscribe</button>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <p className="footer_link_heading m-0">About Swara</p>
            <ul className="footer_about_part m-0">
              <li className="footer_link"><Link to="/">Home</Link></li>
              <li className="footer_link"><Link to="/Aboutus">About Us</Link></li>
              <li className="footer_link"><Link to="/Service">Service</Link></li>
              <li className="footer_link"><Link to="/Resource">Resources</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <p className="footer_link_heading m-0">Services</p>
            <ul className="footer_about_part m-0">
              <li className="footer_link"><Link to="/Service">Depression Therapy</Link></li>
              <li className="footer_link"><Link to="/Service">Teen Therapy</Link></li>
              <li className="footer_link"><Link to="/Service">Couple Therapy</Link></li>
              <li className="footer_link"><Link to="/Service">Individual Therapy</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <p className="footer_link_heading m-0">Legal Pages</p>
            <ul className="footer_about_part m-0">
              <li className="footer_link"><Link to="/Privacy & Policy">Privacy Policy</Link></li>
              <li className="footer_link"><Link to="/FAQs">FAQs</Link></li>
              <li className="footer_link"><Link to="/TermCondition">Term & Conditions</Link></li>
              <li className="footer_link"><Link to="/Contact">Contact</Link></li>
            </ul>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="copyright_section">
                <div className="copyrigt_detail">
                  <Link to="#">Swara</Link> &copy; {currentYear} | All Rights Reserved
                </div>
                <div className="footer_social_media_icon">
                  <a href="#"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa-brands fa-linkedin" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa-brands fa-youtube" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="disclaimer">
                <h3 className="disclaimer_heading">Disclaimer</h3>
                <p className="disclaimer_content">
                  The information, content, and services provided on this website and mobile
                  application are for general informational purposes only and should not be
                  considered a substitute for professional medical advice, diagnosis, or
                  treatment.
                </p>
                <p className="disclaimer_content">
                  We are not a medical service, crisis center, or suicide prevention helpline. We
                  do not provide medical advice, counseling, or emergency intervention. If you
                  are experiencing suicidal thoughts, emotional distress, or a mental health
                  crisis, we strongly urge you to seek immediate help from a qualified healthcare
                  provider or contact a suicide prevention helpline in your area. If you or
                  someone you know is in imminent danger, please call emergency services
                  immediately.
                </p>
                <p className="disclaimer_content">By using this website and mobile application, you acknowledge
                  and agree that:</p>
                <ul>
                  <li>We are not responsible for any decisions or actions you take based on the
                    information provided on our platform.</li>
                  <li>We do not guarantee the accuracy, completeness, or reliability of any
                    content, including but not limited to articles, resources, or user-generated
                    content.</li>
                  <li>We disclaim any liability for any harm, loss, or damages—direct,
                    indirect, incidental, or consequential—that may arise from the use of this
                    website or mobile application.</li>
                  <li>Your use of our platform is solely at your own risk.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
