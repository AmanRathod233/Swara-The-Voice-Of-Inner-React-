import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import Q_A from "../component/Q_A";

function FAQs() {
    return (
        <>
            <Header />
            <section className="common_hero_section faq_hero_section" id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="common_hero_section_heading">
                                <h1>FAQs</h1>
                                <p className="common_hero_section_subheading">
                                    <a href="/">Home</a>
                                    <span><i className="fa fa-chevron-right" aria-hidden="true"></i></span>
                                    FAQs
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Q_A />
            <Footer />
        </>
    );
}

export default FAQs;
