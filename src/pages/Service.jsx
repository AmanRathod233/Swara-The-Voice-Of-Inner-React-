import React from "react";
import { useState } from "react";
import "../../src/assets/css/style.css";
import Header from "../component/header";
import Footer from "../component/footer";
import PopupForm from "../component/PopupForm";


function Service() {
     const [isPopupOpen, setIsPopupOpen] = useState(false);
    
        const togglePopup = () => {
            setIsPopupOpen(!isPopupOpen); 
        };
    return (
        <>
            <Header />
            <section className="common_hero_section service_hero_section" id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="common_hero_section_heading">
                                <h1>services</h1>
                                <p className="common_hero_section_subheading"><a href="index.html">Home</a> <span><i
                                    className="fa fa-chevron-right" aria-hidden="true"></i>
                                 </span>Services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service_section">
                <div className="container">
                    <div className="row">

                        <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="service_section_img">
                                <a href="#"><img src="public/assets/Images/front-view-psychologist-patient1.webp" alt="service"/></a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="service_section_detail">
                                <h3 className="service_section_detail_heading">
                                    depression therapy
                                </h3>
                                <p className="service_section_detail_content">
                                Depression is a persistent experience of emotions like sadness, mental exhaustion and hopelessness. It is more than just a bad mood; it is a serious mental health condition that affects millions of people, disrupting a person’s daily life. At Swara, we understand the courage it takes to reach out for help and feel heard. Our platform is dedicated to providing an online counselling service that is accessible, convenient and 100% confidential. Embark on your journey towards mental wellness with Swara.
                                </p>

                                <button onClick={togglePopup} className="service_section_detail_btn button">Let's Connect</button>
                                <PopupForm isOpen={isPopupOpen} closePopup={togglePopup} />
                            </div>
                        </div>
                    </div>


                    <div className="row">

                        <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="service_section_detail">
                                <h3 className="service_section_detail_heading">
                                    teen therapy
                                </h3>
                                <p className="service_section_detail_content">
                                Teen years are about change, growth, curiosity and discovery. But these early years of teenagers can also bring stress, anxiety, tension and confusion. Young teens tend to face various challenges, including academic pressure, family conflict, social issues, and other issues can bring a range of emotions. To navigate their emotions and varied experiences, teen counselling can help them understand their emotions and develop coping skills. Swara provides a confidential & space for teenagers to express themselves.
                                </p>
                               <button onClick={togglePopup} className="service_section_detail_btn button">Let's Connect</button>
                                <PopupForm isOpen={isPopupOpen} closePopup={togglePopup} />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="service_section_img">
                                <a href="#"><img src="public/assets/Images/teen_tharapy.webp" alt="service"/></a>
                            </div>
                        </div>
                    </div>



                    <div className="row">

                        <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="service_section_img">
                                <a href="#"><img src="public/assets/Images/full-shot-couple-undergoing-therapy1.webp"
                                    alt="service"/></a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="service_section_detail">
                                <h3 className="service_section_detail_heading">
                                    Couple Therapy
                                </h3>
                                <p className="service_section_detail_content">
                                Unresolved issues and a lack of emotions can lead to emotional distance and conflicts in couples. Swara’s couple counselling services aim to help couples navigate through difficult times and rebuild the love and trust in a relationship. We provide a safe space to explore your feelings, improve communication and resolve conflicts. We are dedicated to helping you build a strong, lasting and healthier relationship with your partner.
                                </p>

                                <button onClick={togglePopup} className="service_section_detail_btn button">Let's Connect</button>
                                <PopupForm isOpen={isPopupOpen} closePopup={togglePopup} />
                            </div>
                        </div>
                    </div>


                    <div className="row">

                        <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="service_section_detail">
                                <h3 className="service_section_detail_heading">
                                    individual therapy
                                </h3>
                                <p className="service_section_detail_content">
                                Individual therapy is one-on-one counselling that dives deeper into a person's emotions, experiences, and feelings. It can be a gateway to explore the long-standing patterns of life and take charge of breaking the loop of mental health issues. Individual therapy can help improve relationships, compassion, maladaptive behaviour, coping skills and lead to self-awareness and self-knowledge.
                                </p>

                                <button onClick={togglePopup} className="service_section_detail_btn button">Let's Connect</button>
                                <PopupForm isOpen={isPopupOpen} closePopup={togglePopup} />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="service_section_img">
                                <a href="#"><img src='public/assets/Images/2149130443%201.webp' alt="service"/></a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <Footer />
        </>
    )
}

export default Service;