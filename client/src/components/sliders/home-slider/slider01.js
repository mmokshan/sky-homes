import React, { useRef, useEffect, useState } from "react";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";

const Slider = () => {
  const nextRef = useRef();
  const prevRef = useRef();
  const pauseRef = useRef(); // New reference for the "Pause" button
  const wrapperRef = useRef();
  const imageListRef = useRef();
  const timeDomRef = useRef();
  const timeRunning = 3000;
  const timeAutoNext = 5000;

  const [isPaused, setPaused] = useState(false); // New state for tracking pause state

  useEffect(() => {
    let runTimeOut;
    let runNextAuto;

    const startAutoSlide = () => {
      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        if (!isPaused) {
          nextRef.current.click();
        }
      }, timeAutoNext);
    };

    const showSlider = (click) => {
      const imageItems = imageListRef.current.querySelectorAll(".item");

      if (click === "next") {
        imageListRef.current.appendChild(imageItems[0]);
        wrapperRef.current.classList.add("next");
      } else {
        imageListRef.current.prepend(imageItems[imageItems.length - 1]);
        wrapperRef.current.classList.add("prev");
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        wrapperRef.current.classList.remove("next");
        wrapperRef.current.classList.remove("prev");
      }, timeRunning);

      startAutoSlide();
    };

    const handleNextClick = () => showSlider("next");
    const handlePrevClick = () => showSlider("prev");

    const handlePauseClick = () => {
      setPaused(!isPaused);
      startAutoSlide(); // Restart automatic sliding after toggling pause
    };

    const nextRefCurrent = nextRef.current;
    const prevRefCurrent = prevRef.current;
    const pauseRefCurrent = pauseRef.current;

    nextRefCurrent.addEventListener("click", handleNextClick);
    prevRefCurrent.addEventListener("click", handlePrevClick);
    pauseRefCurrent.addEventListener("click", handlePauseClick);

    startAutoSlide();

    return () => {
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
      nextRefCurrent.removeEventListener("click", handleNextClick);
      prevRefCurrent.removeEventListener("click", handlePrevClick);
      pauseRefCurrent.removeEventListener("click", handlePauseClick);
    };
  }, [timeRunning, timeAutoNext, isPaused]);

  return (
    <div className="slider">
      <div className="blur"></div>

    <div className="wrapper00" ref={wrapperRef}>
      <div className="content">
        <div className="wrapper">
          <div className="title">
            SKY HOMES <br />&
          </div>
          <div className="topic">ENGINEERING</div>
          <div className="des">In Every Nail, We Build Your Tale...</div>
          <div className="buttons">
            <button>
              <a href="/service">SERVICES</a>
            </button>
            <button>
              <a href="/contact">CONTACT US</a>
            </button>
          </div>
        </div>
      </div>
      <div className="list" ref={imageListRef}>
        <div className="item">
          <img src={img1} alt="" />
        </div>

        <div className="item">
          <img src={img2} alt="" />
        </div>
        <div className="item">
          <img src={img3} alt="" />
        </div>
        <div className="item">
          <img src={img4} alt="" />
        </div>
      </div>

      <div className="arrows">
        <button id="prev" ref={prevRef}>
          {"<"}
        </button>
        <button id="next" ref={nextRef}>
          {">"}
        </button>
        <button id="pause" ref={pauseRef}>
          {isPaused ? "Resume" : "Pause"}
        </button>
      </div>

      <div className="time" ref={timeDomRef}></div>
    </div>
    </div>
  );
};

export default Slider;
