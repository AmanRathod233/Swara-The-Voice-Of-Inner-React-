import React from "react"
import { Link } from "react-router-dom";
import Header from "../component/header"
    import Footer from "../component/footer"


function SingleBlog2(){
    return(
        <>
    <Header />

    <section className="common_hero_section singleblog_hero_section" id="home">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="common_hero_section_heading">
                        <h1>blogs</h1>
                        <p className="common_hero_section_subheading"><Link to="/">Home</Link> <span><i
                                    className="fa fa-chevron-right" aria-hidden="true"></i>
                            </span>Resource<span><i className="fa fa-chevron-right" aria-hidden="true"></i>
                            </span>Blog</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="single_blog_section">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-xl-9 col-md-12">
                    <div className="singlblog_box">
                        <img src="assets/images/blog2.webp" alt="blog"/>
                        <div className="singleblog_box_date">
                        <span><i className="fa fa-calendar" aria-hidden="true"></i>
                        April 05, 2025</span>
                        </div>
                        <div className="singleblog_box_heading">
                            <h1 className="heading">
                            What is OCD & What are the 7 Types of OCD?   
                            </h1>
                        </div>
                        <div className="singleblog_box_content">
                            <p className="singleblog_box_information">
                            OCD is often associated with being obsessed with cleanliness. There are many false interpretations of OCD or Obsessive Compulsive Disorder floating on social media, which are far from the truth. So, what is OCD? What is OCD full form? Read on!
                            </p>


                            <h4 className="subheading">
                            What is OCD?
                            </h4>
                            <p className="singleblog_box_information">
                            The full form of OCD in psychology is Obessive Complusive Disorder. It is a mental health condition characterized by frequent unwanted thoughts that cause one to perform repetitive behaviour. This repetitive behaviour interferes with social interactions and performing day-to-day tasks.                              </p>
                            <p className="singleblog_box_information">
                            People often experience obsession and compulsion at some point in their lives. For instance, it is normal for one to double-check locks. The term OCD is very casually used for being obsessed with merely ‘cleaning’. But OCD can be severe and disrupt daily life.  
                            </p>

                            <h4 className="subheading">
                            Obsessions in OCD  
                            </h4>
                            <p className="singleblog_box_information">
                            In clinical terminology, the OCD meaning full form -obsessive compulsive disorder involves patterns of unwanted fears and thoughts known as ‘obsessions’.  These are persistent thoughts, urges or unpleasant ideas that you have over and over, again and again. Some of the obsessive thoughts in people with OCD are:  
                            </p>

                            <ul className="singleblog_box_points m-0">
                                <li>Thoughts of yourself or people getting hurt</li>
                                <li>The fear of losing or forgetting things</li>
                                <li>Worrying about contamination, germs and dirt on your body</li>
                                <li>Needing things to be orderly and balanced</li>
                                <li>Worrying about losing control of what you do or say</li>
                            </ul>



                            <h4 className="subheading mt-3">
                            Complusion in OCD  
                            </h4>
                            <p className="singleblog_box_information">
                            These are repetitive behaviours known as compulsions to deal with anxiety. This can be a rule or a ritual that one follows to control anxiety when having obsessive thoughts. These behaviours combine several actions into a ritual. Just like obsessions, compulsions also have patterns like: </p>

                            <ul className="singleblog_box_points m-0">
                                <li>Doing tasks in a particular order every time.</li>
                                <li>Counting things like steps or bottles or in certain patterns</li>
                                <li>Washing and cleaning multiple times </li>
                                <li>Repeating certain words or phrases </li>
                            </ul>


                            <h4 className="subheading mt-3">
                            What Can Cause OCD?  
                            </h4>
                            <p className="singleblog_box_information">
                            There are several factors that can contribute towards the development of OCD: 
</p>
                            <ul className="singleblog_box_points m-0">
                                <li>Genetics: People with a family history (biological parents or siblings) of OCD have a higher risk of developing OCD.</li>
                                <li>Brain Chemistry: According to studies, there is a difference between the frontal cortex and subcortical structures of the brains of people with OCD.</li>
                                <li>PANDAS Syndrome: PANDAS syndrome (Pediatric Autoimmune Neuropsychiatric) is associated with streptococcal infections, which is a group of conditions that affect children, with OCD being one of them.</li>
                                <li>Childhood Trauma: The symptoms can begin from childhood after a traumatic event or a major life transition, like the birth of a sibling or parent's divorce.</li>
                            </ul>

                            <h4 className="subheading mt-3">
                            What are the 7 Types of OCDs?  
                            </h4>
                            <p className="singleblog_box_information">
                            There are no clinically recognized types of OCD, there are 7 subtypes of OCD. </p> 
                            <ul className="singleblog_box_points m-0">
                                <li>Contamination OCD </li>
                                <p className="singleblog_box_information">Contamination OCD is characterized by a fear of getting contaminated or contaminating others. People with contamination OCD fear that touching a specific object or person will make them dirty or make them sick. To deal with this anxiety, they indulge in compulsive behaviour like frequently washing their hands or avoiding touching anything with their bare hands.  </p>
                                <li>Existential OCD</li>
                                <p className="singleblog_box_information">People suffering from existential OCD experience repetitive thoughts and compulsive questioning of their existence and life. While it is normal for people to think about life and philosophy, people with existential OCD spend an excessive time researching these thoughts and seeking reassurance from others. </p>
                                <li>Harm OCD</li>
                                <p className="singleblog_box_information">Harm OCD involves having thoughts of harming, poisoning or killing yourself or others. While having violent thoughts or intrusive thoughts can happen to anyone, people with harm OCD are deeply disturbed by these thoughts.  </p>
                                <li>Perfectionism OCD</li>
                                <p className="singleblog_box_information">People with perfectionism OCD experience intrusive thoughts where they want to see things in symmetrical order. They have always had in their heads thoughts of ‘this is not right’ and engage in compulsive behaviour to relieve their discomfort and anxiety. This OCD subtype has varying symptoms but usually revolves around physical sensation, counting, symmetrical alignment or precision in all tasks. </p>
                                <li>Somatic OCD</li>
                                <p className="singleblog_box_information">Somatic OCD, or sensorimotor OCD is another subtype of OCD that can cause intrusive thoughts and compulsive behaviours related to somatic experiences. These obsessions are mostly related to bodily concerns, which makes them feel they have a serious illness. People with somatic OCD seek reassurance from experts, asking if they notice anything different in themselves or attempt to find solutions to their distressing sensations, thoughts and fears.  </p>
                               <li>Perinatal and Postpatrum OCD</li>
                                <p className="singleblog_box_information">Perinatal and postpartum OCD is seen in pregnant women or new mothers who have recently given birth. Perinatal OCD can develop during pregnancy or soon after giving birth, while postpartum OCD affects post-delivery. This OCD disorder involves intrusive thoughts of failing as a parent or harming the child. It includes compulsions like repetitively checking the baby’s health and safety by constantly checking breathing, movement and temperature.</p>
                                <li>Pure Obessational OCD (Pure O) </li>
                                <p className="singleblog_box_information">The pure O OCD full form is pure obsessive-compulsive OCD. It is different from other subtypes as pure O people experience obsessions but do not have any clear physical compulsions. People experience distressing, intrusive thoughts and respond with unclear compulsions like mental reviewing, replaying events or silent reassurance seeking.</p>
                            </ul>
                           
                           
                            <h4 className="subheading mt-3">
                            OCD Treatment  
                            </h4>
                            <p className="singleblog_box_information">
                            OCD can begin in teens or young adulthood. Over a period of time, the obsessions and compulsions can also change. These symptoms can get worse under stress, especially under transition and change. Irrespective of how OCD symptoms creep into your life, it is crucial to get them controlled and managed through medicine, therapy or a combination of both.</p> 
                        
                            <h4 className="subheading mt-3">
                            Bottom Line 
                            </h4>
                            <p className="singleblog_box_information">
                            OCD has many subtypes, but the core is the same with patterns of obsessions and compulsions. Awareness about OCD is crucial to break the stigma around mental health and the distinction between OCD and merely being particular about cleanliness. OCD is treatable, with many treatment options available to manage symptoms. Your mental well-being is as important as your physical well-being. Seek help from healthcare providers and professionals to manage OCD and live a healthy and happy life to its fullest.</p>                        
                        </div>

                    </div>
                </div>
                <div className="col-lg-4 col-xl-3 col-md-12">

                    <div className="singleblog_service">
                        <p className="singleblog_service_heading m-0">
                            Services
                        </p>
                        <ul className="singleblog_service_part  p-0 m-0">
                            <li className="singleblog_service_link"><a href="/service">Teen Therapy</a></li> 
                            <li className="singleblog_service_link"><a href="/service">Couple Therapy</a></li>
                            <li className="singleblog_service_link"><a href="/service">Depression Therapy</a></li>
                            <li className="singleblog_service_link"><a href="/service">Individual Therapy</a></li>
                        </ul>
                    </div>

                    <div className="singleblog_form sticky-top">
                        <h4 className="singleblog_form_heading">
                            book a session
                        </h4>
                        <form className="contact_form">
                            <div className="row">
                                <div className="col-lg-12 col-md-6">
                                    <input type="text" className="form-control" placeholder="Your Name"/>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                    <input type="text" className="form-control" placeholder="Your Phone Number"/>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                    <input type="email" className="form-control" placeholder="Your Email id"/>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                    <input type="text" className="form-control" placeholder="Subject"/>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                <input placeholder="Select Session Date" type="text" onFocus={(e) => (e.target.type = 'date')}  id="date"/>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                <input
  placeholder="Select Session Time"
  type="text"
  onFocus={(e) => (e.target.type = 'time')}
  id="time"
/>

                                </div>
                                <div className="col-lg-12">
                                    <textarea className="form-control w-100" id="aboutus_contac_text"
                                        placeholder="Message"></textarea>
                                    <button type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </section>

<Footer />

</>
    );
}

export default SingleBlog2;