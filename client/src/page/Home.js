import React from "react";
import Slider from "../components/sliders/home-slider/slider01";

const Home = () => {
  return (
    <div className="home">
      <div className="slider">
        <Slider />
      </div>
      <div className="home__history">
        <div className="home__history__wrapper">
          <div className="home__history__left">
            <div className="home__logo-container">
              <img
                src={process.env.PUBLIC_URL + "/logo.png"}
                alt=""
                className="home__logo"
              />
            </div>
            <div className="home__slogan">
              Beyond <span>Standards</span> , Above <span>Expectations</span> ,
              Our Commitment to <span>Quality</span>.
            </div>
          </div>

          <div className="home__history__right">
            <div className="home__des">
              <p>
                Since its inception in 2010, Sky Homes and Engineering has built
                a reputation for fostering enduring relationships while
                consistently delivering exceptional projects. 
              </p>
              <p>Our commitment to
                setting new benchmarks in design and construction across diverse
                sectors is evident in every collaboration. Anchored by a
                dedicated team with a decade of experience and fortified by
                robust processes, we manage projects comprehensively from
                strategic planning to post-completion services. This meticulous
                approach ensures unwavering certainty in results, establishing
                Sky Homes and Engineering as a reliable name in property
                development.</p>
              <p>
                At the heart of our success is a profound commitment to
                innovation and excellence. With a decade-long legacy, we take
                pride in not only meeting but exceeding expectations. Sky Homes
                and Engineering embodies a passion for delivering outstanding
                results, reflecting our unwavering dedication to quality and
                client satisfaction, making us a trusted partner in the dynamic
                landscape of property development.
              </p>
            </div>
            <div className="home__des__button">
              <button className="button">
                <a href="/about">Find More</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
