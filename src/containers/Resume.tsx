import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./Resume.css";

/**
 * Gets the width as a fraction of the window inner width.
 */
const getWidth = () => {
  const innerWidth = window.innerWidth;
  if (innerWidth < 600) return window.innerWidth * 0.9;

  if (innerWidth < 900) return window.innerWidth * 0.85;

  return window.innerWidth * 0.7;
};

/**
 * Gets the correct height aspect ratio given a two-page
 * resume and the width calculation.
 */
const getHeight = () => {
  return Math.min(getWidth() * (22 / 8.5), 2200);
};

export const Resume = () => {
  const [dimensions, setDimensions] = useState({
    height: getHeight(),
    width: getWidth(),
  });

  const handleResize = () => {
    setDimensions({
      height: getHeight(),
      width: getWidth(),
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="resume container">
      <div className="skills">
        <FontAwesomeIcon className="fa-2x" icon={brands("js")} />
        <FontAwesomeIcon className="fa-2x" icon={brands("html5")} />
        <FontAwesomeIcon className="fa-2x" icon={brands("css3-alt")} />
        <FontAwesomeIcon className="fa-2x" icon={brands("node")} />
        <FontAwesomeIcon className="fa-2x" icon={brands("react")} />
        <FontAwesomeIcon className="fa-2x" icon={brands("bootstrap")} />
        <FontAwesomeIcon className="fa-2x" icon={brands("python")} />
        <FontAwesomeIcon className="fa-2x" icon={brands("aws")} />
      </div>
      <a href="./media/J. Michael Brown - Resume.pdf" download>
        <div id="ios-resume-container">
          <img
            src="./media/J. Michael Brown - Resume - page 1.png"
            alt="resume page 1"
          />
          <img
            src="./media/J. Michael Brown - Resume - page 2.png"
            alt="resume page 2"
          />
        </div>
      </a>
      <div id="resume-container">
        <iframe
          title="resume"
          src="./media/J. Michael Brown - Resume.pdf"
          width="100%"
          height={dimensions.height}
        />
      </div>
    </section>
  );
};
