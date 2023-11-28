import React, { useState, useEffect } from "react";
import "./Slider.css";
import first from "../images/1st.png";
import second from "../images/2nd.png";
import third from "../images/3rd.png";

const Section3 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [first, second, third];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider">
      <div>
        <div className="slider-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? "active" : ""}`}
            >
              <img src={slide} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="dots-container">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentSlide ? "active-dot" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
