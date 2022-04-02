const styles = {
  display: "grid",
  gridTemplateRows: "1fr 1fr 7fr 1fr",
};

function Resume() {
  return (
    <section className="container" style={styles}>
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
      <iframe
        title="Resume"
        src="./media/J. Michael Brown - Resume.pdf"
        alt="Resume"
        width="100%"
        height="100%"
      ></iframe>
      <p>
        <a href="./media/J. Michael Brown - Resume.pdf" download>
          Download Resume
        </a>
      </p>
    </section>
  );
}

export default Resume;
