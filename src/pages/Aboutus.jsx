import React from "react";
import "../../src/assets/css/style.css";
import Header from "../component/header";
import Footer from "../component/footer";
import SlidingReviewCarousel from "../component/SlidingReviewCarousel";
import CounterBox from "../component/CounterBox"; 
import PopupForm from "../component/PopupForm";
import { useState } from "react";

function Aboutus() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
      const togglePopup = () => {
          setIsPopupOpen(!isPopupOpen);
      };
  return (
    <>
      <Header />

      <section className="common_hero_section aboutus_hero_section" id="home">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="common_hero_section_heading">
                <h1>about us</h1>
                <p className="common_hero_section_subheading">
                  <a href="index.html">Home</a>
                  <span>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </span>
                  About Us
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="welcome_section">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-12">
              <div className="welcome_section_left_part">
                <img
                  src="public/assets/Images/swara.webp"
                  style={{ width: "100%" }}
                  alt="Welcome_swara"
                />
              </div>
            </div>

            <div className="col-xl-7 col-lg-12">
              <div className="welcome_section_right_part">
                <div className="welcome_section_heading">
                  <p className="aboutus_subheading">About Us</p>
                  <h3 className="aboutus_heading">
                    welcome to{" "}
                    <span>
                      Swara
                      <img
                        src="public/assets/Images/pinkheart.png"
                        alt="heart"
                      />
                    </span>
                  </h3>
                  <p className="aboutus_subtitle">Best Online Counselling Platform in India</p>
                  <p class="aboutus_content1">
                  Swara is an online counselling platform dedicated to helping you become the best version of yourself. We provide a confidential and accessible space to help you understand yourself better, find clarity, confidence and resilience in your journey towards wellness & healing.
                            </p>
                            <p class="aboutus_content">
                            It is easier to open up when you know you are heard and not judged; Swara is here to hear your heart story. We, at Swara, are dedicated to providing compassionate care and support for your mental health and well-being. We are here to guide you on your journey to improved well-being through online sessions.
                            </p>
                </div>
                <div className="welcome_section_right_part_images">
                  <img
                    src="public/assets/Images/2149130443%201.webp"
                    alt="about_us"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutus_service_section">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="aboutus_service_section_heading text-center">
                <h3 className="heading">Featured Sevices</h3>
                <p className="heading_content">
                  your mental health deserves real conversations, not just
                  awareness
                </p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6 text-center">
              <div className="service_box">
                <a href="#">
                  <img src="public/assets/Images/relaxation.webp" alt="relaxation" />
                </a>
                <h3 className="service_box_heading">relaxation</h3>
                <p className="service_box_content">
                  Focus your attention on calmness and increase your personal
                  awareness.
                </p>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 col-lg-6 text-center">
              <div className="service_box">
                <a href="#">
                  <img src="public/assets/Images/mind.webp" alt="mind" />
                </a>
                <h3 className="service_box_heading">mind games</h3>
                <p className="service_box_content">
                  It is crucial to understand how to prevent others from playing
                  such games with you.
                </p>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 col-lg-6 text-center">
              <div className="service_box">
                <a href="#">
                  <img src="public/assets/Images/meditation.webp" alt="meditation" />
                </a>
                <h3 className="service_box_heading">meditation</h3>
                <p className="service_box_content">
                  Learn how to deal with difficult emotions and feelings by using
                  healthy strategies.
                </p>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 col-lg-6 text-center">
              <div className="service_box">
                <a href="#">
                  <img src="public/assets/Images/mental.webp" alt="mental" />
                </a>
                <h3 className="service_box_heading">mental health</h3>
                <p className="service_box_content">
                  Improve your focus, relieve stress and anxiety, and develop
                  creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="aboutus_number_section">
        <div className="container">
          <div className="row main_row gy-3">
            <div className="col-lg-6 col-md-12">
              <div className="aboutus_number_section_left_part">
                <img src="public/assets/Images/blog2.webp" alt="number" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="aboutus_number_section_right_part">
                <div className="aboutus_number_section_heading">
                  <h3 className="heading">Why We are Different: Accessible, Confidential & Continuous Support</h3>
                  <p className="heading_content">
                  Engage in meaningful conversations in a safe space for healing and growth with Swara. With conguidance and mindful techniques, we help you improve relationships, build confidence, cope with stress, overcome anxiety & depression. Swara is here to guide you towards a better mental well-being, a healthier and happier life .
                  </p>
                </div>
                <div className="number_section_main_box">
                  <div className="row">
                    <CounterBox count={100} label="Lorem ipsum dolor" />
                    <CounterBox count={10} label="Lorem ipsum dolor" />
                    <CounterBox count={50} label="Lorem ipsum dolor" />
                    <CounterBox count={100} label="Lorem ipsum dolor" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="book_free_session_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="book_free_session_box">
                <div className="book_free_session_box_left_part">
                  <h4 className="book_free_session_box_heading m-0">
                    No More Overthinking. Just Start.
                  </h4>
                  <p className="book_free_session_box_content m-0">
                    Healing begins with one click. No pressure, no judgment—
                    just <br />
                    real conversations
                  </p>
                </div>
                <button onClick={togglePopup} className="button book_a_free_session_btn">Book A Session</button>
                                <PopupForm isOpen={isPopupOpen} closePopup={togglePopup} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sliding_review_section about_us_sliding_review">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sliding_review_section_heading text-center">
                <h3 className="heading">People Who Took the Leap</h3>
                <p className="heading_content">
                  Real stories. Real transformations. Because healing begins with
                  a single step.
                </p>
              </div>
            </div>
            <SlidingReviewCarousel />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Aboutus;
