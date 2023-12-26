import React, { useState } from "react";

const About = () => {
  // Use state to manage the active section
  const [activeSection, setActiveSection] = useState("About Us");

  // Function to handle the click on list items 
  const handleClick = (section) => { setActiveSection(section);
  };

  return (
    <div className="about-page">
      <div className="selection">
        <ul className="items">
          <li
            className={activeSection === "About Us" ? "item active" : "item"}
            onClick={() => handleClick("About Us")}
          >
            About Us
          </li>
          <li
            className={
              activeSection === "MD's Message" ? "item active" : "item"
            }
            onClick={() => handleClick("MD's Message")}
          >
            MD's Message
          </li>
          <li
            className={
              activeSection === "Company Info" ? "item active" : "item"
            }
            onClick={() => handleClick("Company Info")}
          >
            Company Info
          </li>
          <li
            className={activeSection === "Awards" ? "item active" : "item"}
            onClick={() => handleClick("Awards")}
          >
            Awards
          </li>
        </ul>
      </div>
      <div className="about-container">
        <div className="heading">{activeSection}</div>
        <div className="container">
          {activeSection === "About Us" && (
            <div className="about-us">
              <div className="about-sec">
                <div className="content">
                  ABCD Constructions, a premium construction company in Sri
                  Lanka with 20 years of industry experience, began in 1995 as a
                  small-scale provider, evolving into a registered entity in
                  2003 and later obtaining ICTAD-C4 grading in 2012.
                  Specializing in diverse construction projects, ABCD
                  Constructions ensures quality under the supervision of
                  qualified professionals. Holding ICTAD-C4, the company aspires
                  for C3 level, and its ISO certification since 2017 attests to
                  international standards. ABCD Constructions, committed to
                  modern techniques, promises timely delivery and has earned
                  awards for outstanding performance.
                </div>
                <div className="image"></div>
              </div>
              <div className="vision">
                <div className="sub-title">Vision</div>
                <div className="content">
                  To be the passionate leader in the infrastructure construction
                  in the region
                </div>
              </div>
              <div className="mission">
                <div className="sub-title">Mission</div>
                <div className="content">
                  To be the passionate leader in the infrastructure construction
                  in the region
                </div>
              </div>
              <div className="quality-policy">
                <div className="sub-title">Quality Policies</div>
                <div className="content">
                  To be the passionate leader in the infrastructure construction
                  in the region
                </div>
              </div>
            </div>
          )}

          {activeSection === "MD's Message" && (
            <div className="msg-sec">
              <div className="image"></div>
              <div className="content">
                ABCD Constructions, a premium construction company in Sri Lanka
                with 20 years of industry experience, began in 1995 as a
                small-scale provider, evolving into a registered entity in 2003
                and later obtaining ICTAD-C4 grading in 2012. Specializing in
                diverse construction projects, ABCD Constructions ensures
                quality under the supervision of qualified professionals.
                Holding ICTAD-C4, the company aspires for C3 level, and its ISO
                certification since 2017 attests to international standards.
                ABCD Constructions, committed to modern techniques, promises
                timely delivery and has earned awards for outstanding
                performance.
              </div>
            </div>
          )}
          {activeSection === "Company Info" && (
            <div className="info-sec">
              <div className="info">
                <div className="title">Registered Name</div>
                <div className="content">ABCD COnstruction</div>
              </div>
              <div className="info">
                <div className="title">Registered Address</div>
                <div className="content">Address</div>
              </div>
              <div className="info">
                <div className="title">Year Of Established</div>
                <div className="content">year</div>
              </div>
              <div className="info">
                <div className="title">Founder / Chairman</div>
                <div className="content">name</div>
              </div>
              <div className="info">
                <div className="title">CIDA Grade</div>
                <ul>
                  <li>Building Construction - [CS-2]</li>
                  <li>Bridge Construction - [C-2]</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
