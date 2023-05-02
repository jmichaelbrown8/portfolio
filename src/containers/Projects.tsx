import React from "react";
import { Polaroid } from "../components/Polaroid";
import "../components/Polaroid.css";

const work = [
  {
    imageUrl: "/media/mobber.png",
    title: "Mobber",
    tech: "React and Redux.",
    description:
      "A timer app to help manage collaborative programming sessions.",
    siteUrl: "https://jmichaelbrown8.github.io/mobber",
    codeUrl: "https://github.com/jmichaelbrown8/mobber",
  },
  {
    imageUrl: "/media/scrumgame.jpg",
    title: "Scrum Game",
    description:
      "Test your Scrum framework knowledge with a drag and drop puzzle.",
    tech: "React and react-beautiful-dnd.",
    siteUrl: "https://agility.help/scrumgame/",
    codeUrl: "https://github.com/jmichaelbrown8/scrum-game",
  },

  {
    imageUrl: "/media/willitfit.png",
    title: "Will It Fit?",
    description:
      "Social network for connecting with users of similar size to share clothes that fit.",
    tech: "React, MUI, GraphQL, Apollo, MongoDB and Mongoose.",
    // siteUrl: "https://will-it-fit-app.herokuapp.com",
    codeUrl: "https://github.com/jmichaelbrown8/will-it-fit",
  },
  {
    imageUrl: "/media/elevatorpitch.space.png",
    title: "Elevator Pitch",
    tech: "Node, express, mysql2, sequelize, bcrypt, and handlebars.",
    description: "A space to pitch ideas and look for collaborators.",
    // siteUrl: "https://elevatorpitch.space",
    codeUrl: "https://github.com/jmichaelbrown8/elevator-pitch",
  },

  {
    imageUrl: "/media/markup.png",
    title: "Markup",
    description:
      "A progressive web app (PWA) text editor for jotting down code snippets.",
    tech: "NodeJS, IndexedDB, CodeMirror, workbox, webpack, and babel.",
    // siteUrl: "https://lit-river-74989.herokuapp.com/",
    codeUrl: "https://github.com/jmichaelbrown8/markup",
  },
  {
    imageUrl: "/media/grill.png",
    title: "Grill: Food and Friends",
    tech:
      "Foundation CSS library, and jQuery. Third-party APIs: edamam and jservice.",
    description:
      "Search for recipes to grill while grilling your friends with trivia!",
    // siteUrl: "https://grill-n.herokuapp.com/",
    codeUrl: "https://github.com/jmichaelbrown8/grill",
  },
  {
    imageUrl: "/media/globalstandup.png",
    title: "Global Stand-Up",
    tech: "NodeJS, Express, Mongoose, and MongoDB.",
    description:
      "A social media back end for collaboration. Share what you're working on today.",
    // siteUrl: "https://global-stand-up.herokuapp.com",
    codeUrl: "https://github.com/jmichaelbrown8/global-stand-up",
  },
  {
    imageUrl: "/media/tutortea.png",
    title: "Tutor Tea",
    tech: "Node, express, mysql2, sequelize, bcrypt, and handlebars.",
    description:
      "Rate and review your tutor to help others in bootcamp to get paired up.",
    // siteUrl: "https://tutortea.com/",
    codeUrl: "https://github.com/jmichaelbrown8/tutortea",
  },
  {
    imageUrl: "/media/agility-help.png",
    title: "Agility Help",
    tech:
      "Node, express, mysql2, sequelize, bcrypt, handlebars, mui css library, and toastify js library.",
    description: "A blog site for helpful agile software development tips.",
    // siteUrl: "https://agility-help.herokuapp.com/",
    codeUrl: "https://github.com/jmichaelbrown8/agility-help",
  },
];

export const Projects = () => {
  return (
    <section className="gallery">
      {work.map((workItem) => (
        <Polaroid key={workItem.title} {...workItem} />
      ))}
    </section>
  );
};
