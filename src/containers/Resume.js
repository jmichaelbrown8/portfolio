import { useState, useEffect } from "react";

const styles = {
  container: {
    display: "grid",
    gridTemplateRows: "auto",
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
      <h3>Skills</h3>
      <ul>
        <li>JavaScript, Python, HTML, CSS, SQL, MongoDB</li>
        <li>NodeJS, Express, React, jQuery, Bootstrap, GraphQL</li>
        <li>AWS: Cloudfront, Route53, S3, Lambda, EC2, Cloudformation</li>
        <li>
          Meeting Facilitation, Story Mapping, Wireframing, Leading Continuous
          Improvement
        </li>
      </ul>
      <div id="resume-container">
        <iframe
          title="resume"
          src="./media/J. Michael Brown - Resume.pdf#page=2"
          type="application/pdf"
          page="2"
          width="100%"
          height={dimensions.height}
        />
      </div>
      <p>
        <a href="./media/J. Michael Brown - Resume.pdf" download>
          Download Resume
        </a>
      </p>
    </section>
  );
}

export default Resume;
