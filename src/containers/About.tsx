import React from "react";
import { Polaroid } from "../components/Polaroid";
import "./About.css";

export const About = ({ setCurrentPage }: any) => {
  return (
    <section id="about-me">
      <Polaroid
        imageUrl={"/media/headshot.jpg"}
        title={<em>Yep, my name really is just the letter J.!</em>}
      />
      <div>
        <p>
          Full stack web developer with over a decade of software industry
          experience delivering cloud-based solutions.
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
          Experienced in React, Typescript, JavaScript, HTML, CSS, NodeJS,
          Python, Java, and AWS.
        </p>
        <p>
          Background in{" "}
          <a
            href="https://soundcloud.com/j-michael-brown-304158742"
            target="_blank"
            rel="noopener noreferrer"
          >
            music
          </a>
          ,{" "}
          <a
            href="#film"
            onClick={() => {
              setCurrentPage("#film");
            }}
          >
            animation
          </a>
          ,
          <a
            href="https://www.instagram.com/monochromeiphone/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            photography{" "}
          </a>
          <a
            href="https://www.instagram.com/kodachromeiphone/"
            target="_blank"
            rel="noopener noreferrer"
          >
            (2)
          </a>
          , and digital media.
        </p>
      </div>
    </section>
  );
};
