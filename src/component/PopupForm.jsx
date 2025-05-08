import React from 'react';
import '/src/assets/css/style.css';

function PopupForm({ isOpen, closePopup }) {
  if (!isOpen) return null;

  return (
    <section id="popupForm" className="popup-form active">
    <div className="container">
        <div className="row">
            <div className="col-xl-12">
            <span className="close-btn" onClick={closePopup}>&times;</span>
                <div className="contact_connect_section_right_part">
                    <div className="contact_connect_section_heading">
                        <h3 className="heading text-center">
                            Stop Waiting, Start Your Healing Process Now.
                           </h3>
                       </div>
                       <form className="contact_form">
                           <div className="row">
                               <div className="col-lg-6">
                                   <input type="text" className="form-control" placeholder="Your Name"/>
                               </div>
                       <div className="col-lg-6">
                           <input type="text" className="form-control" placeholder="Your Phone Number"/>
                       </div>
                       <div className="col-lg-6">
                           <input type="email" className="form-control" placeholder="Your Email id"/>
                       </div>
                       <div className="col-lg-6">
                           <input type="text" className="form-control" placeholder="Subject"/>
                       </div>
                       <div className="col-lg-6">
                           <input type="date" className="form-control" placeholder="Date"/>
                       </div>
                       <div className="col-lg-6">
                           <input type="time" className="form-control" placeholder="time"/>
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
  );
}

export default PopupForm;
