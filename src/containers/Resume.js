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
        src="./media/resume.pdf"
        alt="Resume"
        width="100%"
        height="100%"
      ></iframe>
      <a
        href="https://drive.google.com/file/d/1DPpo_neAnPRrVUYb2osZ4A0_8uAqntgm/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
    </section>
  );
}

export default Resume;
