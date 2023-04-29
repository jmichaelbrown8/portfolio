import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./Resume.css";

const styles = {
  container: {
    display: "grid",
    gridTemplateRows: "auto",
  },
  image: {
    width: "100%",
  },
  skills: {
    display: "grid",
    gridAutoFlow: "column",
    justifyContent: "space-between",
    margin: "2rem 0",
  },
};

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function width() {
  const innerWidth = window.innerWidth;
  if (innerWidth < 600) return window.innerWidth * 0.9;

  if (innerWidth < 900) return window.innerWidth * 0.85;

  return window.innerWidth * 0.7;
}

function height() {
  // returns the correct height aspect ratio given a two-page
  // resume and the width calculation
  return Math.min(width() * (22 / 8.5), 2200);
}

function Resume() {
  const [dimensions, setDimensions] = useState({
    height: height(),
    width: width(),
  });
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: height(),
        width: width(),
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  return (
    <section className="container" style={styles.container}>
      <div style={styles.skills}>
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
            style={styles.image}
            src="./media/J. Michael Brown - Resume - page 1.png"
            alt="resume page 1"
          />
          <img
            style={styles.image}
            src="./media/J. Michael Brown - Resume - page 2.png"
            alt="resume page 2"
          />
        </div>
      </a>
      <div id="resume-container">
        <iframe
          title="resume"
          src="./media/J. Michael Brown - Resume.pdf"
          type="application/pdf"
          width="100%"
          height={dimensions.height}
        />
      </div>
    </section>
  );
}

export default Resume;
