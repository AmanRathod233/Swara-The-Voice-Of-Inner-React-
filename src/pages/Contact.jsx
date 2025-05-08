import React from "react";
import "../../src/assets/css/style.css";
import Header from "../component/header";
import Footer from "../component/footer";
import Q_A from "../component/Q_A";

// 
function Contact() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="common_hero_section contact_hero_section" id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="common_hero_section_heading">
                <h1>Contact</h1>
                <p className="common_hero_section_subheading">
                  <a href="index.html">Home</a> <span><i className="fa fa-chevron-right" aria-hidden="true"></i></span> Contact
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact_connect_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact_connect_section_left_part">
                <div className="contact_connect_section_heading text-start">
                  <h3 className="heading">Connect with Swara</h3>
                  <p className="heading_content">
                    Healing begins with one click. No pressure, no judgment—just real conversations.
                  </p>
                </div>
                <div className="contact_details">
                <p><a href="https://maps.app.goo.gl/BTJVytMt2mBdF8v18" target="_blank"><i class="fa fa-location-dot"></i>101 E 129th St, East Chicago, IN 46312,
                US</a></p>
                  <p><a href="mailto:swara@gmail.com"><i className="fa fa-envelope"></i>swara@gmail.com</a></p>
                  <p><a href="tel:1-333-345-6868"><i className="fa fa-phone"></i>1-333-345-6868</a></p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contact_connect_section_right_part">
                <div className="contact_connect_section_heading">
                  <h3 className="heading text-center">
                  Help is One Message Away.
                  </h3>
                </div>
                <form className="contact_form">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <input type="text" className="form-control" placeholder="Your Name" />
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <input type="text" className="form-control" placeholder="Your Phone Number" />
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <input type="email" className="form-control" placeholder="Your Email ID" />
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <input type="text" className="form-control" placeholder="Subject" />
                    </div>
                    <div className="col-lg-12">
                      <textarea className="form-control w-100" placeholder="Message"></textarea>
                      <button type="submit">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <Q_A />

      <Footer />
    </>
  );
}

export default Contact;
