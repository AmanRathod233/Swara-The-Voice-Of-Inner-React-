import React, { useState } from "react";
import "../../src/assets/css/style.css";
import { Link, useLocation } from "react-router-dom";
import Footer from "../component/footer";
import TestimonialWithVideoPopup from "../component/TestimonialWithVideoPopup";
import ExpertCarousel from "../component/ExpertCarousel";
import SlidingReviewCarousel from "../component/SlidingReviewCarousel";
import CompanyLogoCarousel from "../component/CompanyLogoCarousel";
import BlogCard from "../component/BlogCard";
import PopupForm from "../component/PopupForm";

function Home() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen); 
    };


    const location = useLocation();
    const currentPath = location.pathname;

    const blogPosts = [
        {
            image: "public/assets/Images/blog-11.webp",
            title: "Can Anxiety Disorders be Cured Permanently?",
            link: "/SingleBlog1",
            content: `Anxiety is a common mental health conditions that affect millions of people globally. The feeling of anxiety interferes with almost everything you do. People often wonder if can anxiety be cured permanently. With the right treatment and care.`,
        },
        {
            image: "public/assets/Images/blog2.webp",
            title: "What is OCD & What are the 7 Types of OCD?",
            link: "/SingleBlog2",
            content: `OCD is often associated with being obsessed with cleanliness. There are many false interpretations of OCD or Obsessive Compulsive Disorder floating on social media, which are far from the truth. So, what is OCD? What is OCD full form?`,
        },
        {
            image: "public/assets/Images/blog1.webp",
            title: "What are the Causes of Overthinking? How to Stop Overthinking?",
            link: "/SingleBlog3",
            content: `Do you find yourself thinking about things you could say? Overanalysing every decision? Replaying situations? And about all the ifs and buts? Overthinking is a trap that just pulls you into a vicious loop of negativity, stress and anxiety.`,
        },
    ]

    return (
        <>
            <header className="header_section">
                <div className="container">
                    <div className="row justify-content-between align-items-center m-0">
                        <div className="col-xl-5 col-md-6 col-6">
                            <a href="/">
                                <img src="public/assets/Images/swaralogo.svg" alt="logo" />
                            </a>
                        </div>

                        <div className="col-xl-7 col-md-6 col-6 d-flex justify-content-end flex-grow-1">
                            <nav className="navbar navbar-expand-xl">
                                <button className="navbar-toggler d-xl-none" type="button" data-bs-toggle="offcanvas"
                                    data-bs-target="#mobileNav">
                                    <i className="fa fa-bars" aria-hidden="true"></i>
                                </button>

                                <div className="collapse navbar-collapse d-none d-xl-flex">
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <a className={`nav-link ${currentPath === "/" ? "active" : ""}`} href="/">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link ${currentPath === "/Aboutus" ? "active" : ""}`} href="/Aboutus">About Us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link ${currentPath === "/Service" ? "active" : ""}`} href="/Service">Services</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link ${currentPath === "/Resource" ? "active" : ""}`} href="/Resource">Resource</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link ${currentPath === "/Contact" ? "active" : ""}`} href="/Contact">Contact</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="tel:1-333-345-6868">
                                                <i className="fa fa-phone" aria-hidden="true"></i> 1-333-345-6868
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            </nav>

                            {/* Mobile Nav - skip dynamic for static pages unless routing is added */}
                            <div className="offcanvas offcanvas-start" tabIndex="-1" id="mobileNav">
                                <div className="offcanvas-header">
                                    <a href="/">
                                        <img src="public/assets/Images/swaralogo.svg" alt="logo" />
                                    </a>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav">
                                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/Aboutus">About Us</Link></li>
ink                                        <li className="nav-item"><Link className="nav-link" to="/Expert">Expert</Link></li>
                                        <li className="nav-item"><Link className="nav-link" href="/Resource">Resource</Link></li>
                                        <li className="nav-item"><Link className="nav-link" href="/Contact">Contact</Link></li>

                                    </ul>
                                    <div className="nav_contact">
                                        <p className="nav_phone_number"><a href="tel:1-333-345-6868"><i className="fa fa-phone"
                                            aria-hidden="true"></i>1-333-345-6868</a></p>
                                        <p className="nav_email"><a href="mailto:swara@gmail.com"><i
                                            className="fa fa-envelope"></i>swara@gmail.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="hero_section" id="home">
                <div className="container">
                    <div className="hero_section_background">
                        <div className="row">
                            <div className="col-xl-6">

                                <div className="hero_section_left">
                                    <div className="hero_section_heading">
                                        <h1>Your Mind Speaks.<br />
                                            Let’s Listen.</h1>
                                    </div>
                                    <div className="hero_section_content">
                                        <p>Feeling lost? Stressed? Overthinking everything? You’re not alone.
                                            <br /> Let’s talk,
                                            heal, and
                                            grow together—100% free therapy sessions, no strings attached.
                                        </p>
                                    </div>
                                    <button onClick={togglePopup} className="button hero_section_btn">Book A Session</button>
                                    <PopupForm isOpen={isPopupOpen} closePopup={togglePopup} />

                                </div>

                            </div>
                            <div className="col-xl-6">
                                <div className="hero_section_img text-end">
                                    <img src="public/assets/Images/Illustration.webp" alt="hero_section_img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="from_schoolbooks_to_soul_healing_section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-12">
                            <div className="from_schoolbooks_to_soul_healing_section_img h-100">
                                <img src="public/assets/Images/Frame 8.webp" alt="from_schoolbooks_to_soul_healing_section_img"
                                    className="w-100 h-100" />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-12">
                            <div className="from_schoolbooks_to_soul_healing_section_right_part text-start h-100">
                                <div className="from_schoolbooks_to_soul_healing_section_right_part_heading">
                                    <h3 className="heading">From Schoolbooks to<br />
                                        Soul Healing</h3>
                                </div>
                                <div className="from_schoolbooks_to_soul_healing_section_right_part_content">
                                    <p className="from_schoolbooks_to_soul_healing_section_right_part_text m-0">
                                        I just finished my 12th exams, but my passion for psychology is lifelong.<br />
                                        Instead of
                                        waiting for a degree to start helping, I decided to act NOW.
                                    </p>
                                    <p className="from_schoolbooks_to_soul_healing_section_right_part_text m-0">I just finished my
                                        12th
                                        exams, but my passion for psychology is lifelong.<br />
                                        Instead of waiting for a degree to start helping, I decided to act NOW.<br />
                                        ‘Voice of Inner’ is my way of giving back—real conversations, zero<br />
                                        judgment, and 100% free therapy.
                                    </p>
                                    <ul className="from_schoolbooks_to_soul_healing_section_right_part_points m-0 ps-0">
                                        <li><img src="public/assets/Images/light-bulb.webp" alt="light-bulb" /> <span> Mental Health
                                            Deserves More Than Just Awareness—It Needs
                                            ACTION.</span>
                                        </li>
                                        <li><img src="public/assets/Images/chat-bubble.webp" alt="chat-bubble" /><span> Because You
                                            Deserve to Be Heard.</span></li>
                                        <li><img src="public/assets/Images/headphones.webp" alt="headphones" /><span> Because Sometimes,
                                            a Chat Changes Everything.</span></li>
                                    </ul>
                                    <button onClick={togglePopup} className="button from_schoolbooks_to_soul_healing_section_right_part_btn">Book A Session</button>
                                    <PopupForm isOpen={isPopupOpen} closePopup={togglePopup} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="number_speak_louder_than_doubts_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="number_speak_louder_than_doubts_heading">
                                <h3 className="heading">
                                    Numbers Speak
                                    <br />Louder Than Doubts
                                </h3>
                                <p className="heading_content">
                                    No Degree Yet, But Already Making a Difference!
                                </p>
                                <button onClick={togglePopup} className="button  number_speak_louder_than_doubts_btn">Book A Session</button>
                                    <PopupForm isOpen={isPopupOpen} closePopup={togglePopup} />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <div className="number_speak_louder_than_doubts_box">
                                        <div className="number_speak_louder_than_doubts_box_heading">
                                            <h3 className="heading">
                                                50+
                                            </h3>
                                            <p className="heading_content">
                                                Minds Helped
                                            </p>
                                        </div>
                                        <div className="number_speak_louder_than_doubts_box_img">
                                            <img src="public/assets/Images/heart.webp" alt="mind_help" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="number_speak_louder_than_doubts_box">
                                        <div className="number_speak_louder_than_doubts_box_heading">
                                            <h3 className="heading">
                                                30+
                                            </h3>
                                            <p className="heading_content">
                                                Happy Souls
                                            </p>
                                        </div>
                                        <div className="number_speak_louder_than_doubts_box_img">
                                            <img src="public/assets/Images/_ÎÓÈ_1.webp" alt="smiley" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="number_speak_louder_than_doubts_box">
                                        <div className="number_speak_louder_than_doubts_box_heading">
                                            <h3 className="heading">
                                                50+
                                            </h3>
                                            <p className="heading_content">
                                                Minds Helped
                                            </p>
                                        </div>
                                        <div className="number_speak_louder_than_doubts_box_img">
                                            <img src="public/assets/Images/heart.webp" alt="mind_help" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pick_your_tharapy_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 justify-content-center d-flex">
                            <div className="pick_your_tharapy_section_heading text-center">
                                <h3 className="heading">
                                    Pick Your Therapy,<br />
                                    No Fees Attached
                                </h3>
                                <p className="heading_content">
                                    your mental health deserves real conversations, not just awareness
                                </p>
                            </div>
                        </div>
                        <div className="row d-none d-sm-flex p-0">
                            <div className="col-lg-5 col-md-6">
                                <Link to="/Service">
                                    <div className="pick_your_tharapy_section_box1">
                                        <div className="pick_your_tharapy_section_box_content">
                                            <p>Depression Therapy</p>
                                            <i className="fa-solid fa-arrow-right" style={{ color: ' #ffffff' }}></i>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-lg-7 col-md-6">
                                <Link to="/Service">
                                    <div className="pick_your_tharapy_section_box2">
                                        <div className="pick_your_tharapy_section_box_content">
                                            <p>Teen Therapy</p>
                                            <i className="fa-solid fa-arrow-right" style={{ color: ' #ffffff' }}></i>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <Link to="/Service">
                                    <div className="pick_your_tharapy_section_box3">
                                        <div className="pick_your_tharapy_section_box_content">
                                            <p>Couple Therapy</p>
                                            <i className="fa-solid fa-arrow-right" style={{ color: ' #ffffff' }}></i>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <Link to="/Service">
                                    <div className="pick_your_tharapy_section_box4">
                                        <div className="pick_your_tharapy_section_box_content">
                                            <p>Individual Therapy</p>
                                            <i className="fa-solid fa-arrow-right" style={{ color: ' #ffffff' }}></i>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div className="pick_your_tharapy_section_box5">
                                    <h3 className="pick_your_tharapy_section_box_heading">
                                        Your Healing <br />
                                        Starts Here
                                    </h3>
                                    <p className="pick_your_tharapy_section_box_information">
                                        One conversation can change everything. No<br />
                                        pressure, no judgment—just real support.
                                    </p>
                                    <div className="pick_your_tharapy_section_box_link">
                                        <Link to="/Service">
                                            <p>Book A Session Now</p>
                                            <i className="fa-solid fa-arrow-right" style={{ color: ' #ffffff' }}></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="therapyCarousel" className="carousel slide d-block d-sm-none" data-bs-ride="carousel"
                            data-bs-interval="2000">
                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <div className="pick_your_tharapy_section_box1">
                                        <div className="pick_your_tharapy_section_box_content">
                                            <p>Depression Therapy</p>
                                            <i className="fa-solid fa-arrow-right" style={{ color: ' #ffffff' }}></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="pick_your_tharapy_section_box2">
                                        <div className="pick_your_tharapy_section_box_content">
                                            <p>Teen Therapy</p>
                                            <i className="fa-solid fa-arrow-right" style={{ color: ' #ffffff' }}></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="pick_your_tharapy_section_box3">
                                        <div className="pick_your_tharapy_section_box_content">
                                            <p>Couple Therapy</p>
                                            <i className="fa-solid fa-arrow-right" style={{ color: ' #ffffff' }}></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="pick_your_tharapy_section_box4">
                                        <div className="pick_your_tharapy_section_box_content">
                                            <p>Individual Therapy</p>
                                            <i className="fa-solid fa-arrow-right" style={{ color: ' #ffffff' }}></i>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* <!-- Carousel controls --> */}
                            <button className="carousel-control-prev" type="button" data-bs-target="#therapyCarousel"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#therapyCarousel"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </button>
                        </div>


                    </div>
                </div>
            </section>


            <section className="expert_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="col-lg-12 justify-content-center d-flex">
                                <div className="expert_section_heading text-center">
                                    <h3 className="heading">
                                        Talk to the Experts,<br />
                                        Get Clarity
                                    </h3>
                                    <p className="heading_content">
                                        Because the right guidance can change everything—connect<br />
                                        with mental health professionals for deeper insights.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <ExpertCarousel />

                    </div>
                </div>
            </section>

            <section className="from_swara_heart_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="from_swara_heart_section_left_part h-100">
                                <h3 className="heading">
                                    From <span>Swara’s</span> Heart
                                    to Yours
                                </h3>
                                <p className="heading_content">
                                    Psychology isn’t just a subject for me—it’s a calling. I believe healing starts with one
                                    real conversation. No labels, no stigma, just a safe space to breathe, express, and grow. I
                                    created this platform to be the voice of inner thoughts that often go unheard. Let’s change
                                    that.
                                </p>
                                <div className="from_swara_heart_section_left_part_points">
                                    <p><img src="public/assets/Images/light-bulb.webp" alt="light-bulb" /> <span>Healing starts
                                        here.</span></p>
                                    <p><img src="public/assets/Images/chat-bubble.webp" alt="chat-bubble" /><span> Talking is
                                        therapy.</span></p>
                                    <p><img src="public/assets/Images/rocket.webp" alt="rocket" /><span> Let’s rewrite your story
                                        together</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <img src="public/assets/Images/Rectangle13.webp" alt="Swara" className="w-100" style={{ borderRadius: "60px" }} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonial_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="testimonial_heading text-center">
                                <h3 className="heading">
                                    People Who Took the Leap
                                </h3>
                                <p className="heading_content">
                                    Real stories. Real transformations. Because healing begins with a single step.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <TestimonialWithVideoPopup />

            </section>

            <section className="sliding_review_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="sliding_review_section_heading text-center">
                                <h3 className="heading">
                                    People Who Took the Leap
                                </h3>
                                <p className="heading_content">
                                    Real stories. Real transformations. Because healing begins with a single step.
                                </p>
                            </div>
                        </div>

                        <SlidingReviewCarousel />


                    </div>
                </div>
            </section>

            <section className="support_company_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="support_company_section_heading text-center">
                                <h3 className="heading">
                                    Stronger Together, Healing Better
                                </h3>
                                <p className="heading_content">
                                    breaking mental health stigmas isn’t a solo mission. Proudly<br />
                                    partnering with those who believe in real change.
                                </p>
                            </div>
                        </div>
                        <CompanyLogoCarousel />
                    </div>
                </div>
            </section>

            <section className="blog_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog_section_heading">
                                <div className="blog_section_heading_left">
                                    <h3 className="heading">
                                        From <span>Swara<img src="public/assets/Images/pinkheart.png" alt="heart" /></span>
                                    </h3>
                                    <p className="heading_content">
                                        Your go-to space for self-care, growth, and clarity—because a<br />
                                        healthy mind needs the right resources.
                                    </p>
                                </div>

                                <a href="/Resource">
                                    <div className="blog_section_btn button">
                                        Browse All Resources
                                    </div>
                                </a>
                            </div>
                        </div>
                        {blogPosts.map((post, index) => (
                            <BlogCard
                                key={index}
                                image={post.image}
                                title={post.title}
                                link={post.link}
                                content={post.content}
                            />
                        ))}



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
                                        Healing begins with one click. No pressure, no judgment—just
                                        <br /> real conversations
                                    </p>
                                </div>
                                <button onClick={togglePopup} className="button book_a_free_session_btn">Book A Session</button>
                                <PopupForm isOpen={isPopupOpen} closePopup={togglePopup} />
                                      </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />


        </>
    );

}

export default Home;