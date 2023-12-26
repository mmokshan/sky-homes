import React from "react";
import * as svg from "../svg";

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer__top">
      <div className="footer__top__wrapper">
        <div className="footer__section">
          <div className="footer__logo-container">
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              alt=""
              className="footer__logo"
            />
          </div>
          <div className="footer__headding">
            <h3>Sky Homes & Engineering</h3>
          </div>
          <div className="footer__social-container">
            <ul className="footer__social-links">
              <li className="footer__social-links__item">
                <a href="http://facebook.com">
                  <div className="footer__svg">
                    {svg.facebookIcon({ width: "24", height: "24" })}
                  </div>
                </a>
              </li>
              <li className="footer__social-links__item">
                <a href="http://instagram.com">
                  <div className="footer__svg">
                    {svg.instagramIcon({ width: "24", height: "24" })}
                  </div>
                </a>
              </li>
              <li className="footer__social-links__item">
                <a href="http://twitter.com">
                  <div className="footer__svg">
                    {svg.twitterIcon({ width: "24", height: "24" })}
                  </div>
                </a>
              </li>
              <li className="footer__social-links__item">
                <a href="http://linkedin.com">
                  <div className="footer__svg">
                    {svg.linkedinIcon({ width: "24", height: "24" })}
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__section">
          <div className="footer__section-wrapper">
            <div className="footer__sub-headding">
              <p>Usefull Links</p>
            </div>
            <div className="footer__link-wrapper">
              <div className="footer__link">
                <a href="/">Home</a>
              </div>
              <div className="footer__link">
                <a href="/about">About</a>
              </div>
              <div className="footer__link">
                <a href="/projects">Projects</a>
              </div>
              <div className="footer__link">
                <a href="/careers">Careers</a>
              </div>
              <div className="footer__link">
                <a href="/contact-us">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__section">
          <div className="footer__section-wrapper">
            <div className="footer__sub-headding">
              <p>Contact Details</p>
            </div>
            <div className="footer__contact-wrapper">
              <div className="footer__contact">
                <div className="footer__svg-contact">
                  {svg.locationIcon({ width: "24", height: "24" })}
                </div>
                <div className="footer__contact__text">
                  <p>Sri Sudarshanarama road, Polonnaruwa, Sri Lanka</p>
                </div>
              </div>

              <div className="footer__contact">
                <div className="footer__svg-contact">
                  {svg.callIcon({ width: "24", height: "24" })}
                </div>
                <div className="footer__contact__text">
                  <p>+942712345</p>
                </div>
              </div>

              <div className="footer__contact">
                <div className="footer__svg-contact">
                  {svg.mobileIcon({ width: "24", height: "24" })}
                </div>
                <div className="footer__contact__text">
                  <p>+94711234567</p>
                </div>
              </div>

              <div className="footer__contact">
                <div className="footer__svg-contact">
                  {svg.emailopenIcon({ width: "24", height: "24" })}
                </div>
                <div className="footer__contact__text">
                  <p>abcdconstruction@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer__bottom">
      <div className="footer__bottom__wrapper">
        <div className="footer__bottom__copyrights">
          <p>Copyright © 2023 ABCD Constructions. All Rights Reserved</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Footer;
