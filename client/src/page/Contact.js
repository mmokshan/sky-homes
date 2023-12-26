import React from "react";
import * as svg from "../components/svg.js";
import ContactForm from "../components/form/ContactForm.js";



const Contact = () => {
 
  return (
    <div className="contact-page">
      <div className="page-wrapper">

        <div className="contact-heading">Contact Us</div>
        <div className="details">
          <div className="card">
            <div className="img">
              {svg.locationIcon({ width: "50", height: "50" })}
            </div>
            <div className="title"> Write us</div>
            <div className="content">
              <p>
                Sri Sudarshanarama Road,
                <br />
                Polonnaruwa <br />
                Sri Lanka
              </p>
            </div>
          </div>

          <div className="card mid">
            <div className="img">
              {svg.callIcon({ width: "50", height: "50" })}
            </div>
            <div className="title"> Call Us</div>
            <div className="content">
              <p>
                <span>Telephone : </span>+94271234567
              </p>
              <p>
                <span>Mobile : </span>+94711234567
              </p>
              <p>
                <span>Fax :</span>+9427754321
              </p>
            </div>
          </div>

          <div className="card">
            <div className="img">
              {svg.emailcloseIcon({ width: "50", height: "50" })}
            </div>
            <div className="title"> Message Us</div>
            <div className="content">
              <p>abcdconstruction@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="map ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d246.97363121004042!2d81.00032576473356!3d7.9390539059729335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afb45eca3521c7d%3A0x7e644649183cc886!2sADM%20Construction%20Polonnaruwa!5e0!3m2!1sen!2slk!4v1701344400014!5m2!1sen!2slk"
            width="100%"
            height="450"
            style={{ border: 0 }}
            title="ABCD Construction"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
  
        <div className="contact-form">
          <ContactForm />
        </div>

      </div>
    </div>
  );
};

export default Contact;
