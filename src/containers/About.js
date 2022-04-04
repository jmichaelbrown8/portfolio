import Polaroid from "../components/Polaroid";
import "./About.css";

const styles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, 25em)",
  justifyItems: "center",
  alignItems: "center",
  justifyContent: "space-evenly",
  padding: "2rem",
  gap: "2rem",
  fontSize: "1rem",
};

function About() {
  return (
    <section id="about-me" style={styles}>
      <Polaroid
        imageUrl={"/media/headshot.jpg"}
        title={<em>Yep, my name really is just the letter J.!</em>}
      />
      <div>
        <p>
          Agile software delivery expert, with 4 years of front end web
          development experience and 6 years of software team process
          leadership.
        </p>
        <p>
          Enthusiastic about teaching, mentoring, coaching, and continuing to
          learn along with a close-knit team.
        </p>
        <p>
          Passionate about simplifying the complex and using data to inform
          decisions.
        </p>
        <p>
          Experienced in HTML, CSS, JavaScript, Node, Python, SQL, MongoDB,
          React, and AWS.
        </p>
        <p>
          Background in{" "}
          <a
            href="https://soundcloud.com/j-michael-brown-304158742"
            target="_blank"
            rel="noreferrer"
          >
            music
          </a>
          ,{" "}
          <a href="./film.html" target="_blank">
            animation
          </a>
          ,
          <a
            href="https://www.instagram.com/monochromeiphone/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            photography{" "}
          </a>
          <a
            href="https://www.instagram.com/kodachromeiphone/"
            target="_blank"
            rel="noreferrer"
          >
            (2)
          </a>
          , and digital media.
        </p>
      </div>
    </section>
  );
}

export default About;
