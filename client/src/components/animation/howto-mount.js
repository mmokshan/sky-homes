import React, { useRef } from "react";
import { animated } from "react-spring";
import useVisibleAnimation from "./useVisibleAnimation";

const YourComponent = () => {
  const testRef = useRef(null);
  const { opacity, transform } = useVisibleAnimation(testRef);

  return (
    <animated.div ref={testRef} style={{ opacity, transform }}>
      {/* Your component content goes here */}
    </animated.div>
  );
};

export default YourComponent;


import React, { useRef } from "react";
import { animated } from "react-spring";
import { ShowRightAnimationOnce } from "../components/animation/animation01";
import Slider from "../components/sliders/home-slider/slider01";

const Home = () => {
  const testRef = useRef(null);
  const desRef = useRef(null);

  const { opacity: sloganOpacity, transform: sloganTransform } = ShowRightAnimationOnce(testRef);
  const { opacity: desOpacity, transform: desTransform } = ShowRightAnimationOnce(desRef);

  return (
    <div className="home">
      <div className="slider">
        <Slider />
      </div>
      <div className="home__history">
        <div className="home__history__wrapper">
          <div className="home__history__left">
            <div className="home__logo-container">
              <img src={process.env.PUBLIC_URL + "/logo.png"} alt="" className="home__logo" />
            </div>
            <div className="home__slogan" ref={testRef}>
              Beyond <animated.span style={{ opacity: sloganOpacity, transform: sloganTransform }}>Standards</animated.span>, Above{" "}
              <animated.span style={{ opacity: sloganOpacity, transform: sloganTransform }}>Expectations</animated.span>, Our Commitment to{" "}
              <animated.span style={{ opacity: sloganOpacity, transform: sloganTransform }}>Quality</animated.span>.
            </div>
          </div>

          <div className="home__history__right">
            <div className="home__des" ref={desRef}>
              <animated.span style={{ opacity: desOpacity, transform: desTransform }}>
                <p>
                  Since 1997, Parkview has built long-lasting relationships with our clients and collaborators to deliver exceptional projects.
                </p>
                <p>
                  We work in true partnership with our stakeholders to deliver new benchmarks in design and construction across an expanding
                  sector portfolio.
                </p>
                <p>
                  At the core of our organisation, you’ll find our people: a dedicated, highly experienced team with robust processes to
                  deliver your result with certainty.
                </p>
                <p>
                  Our team successfully manages projects across the complete property value chain, from strategic planning, through to
                  concept design, construction and post-completion services.
                </p>
              </animated.span>
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
