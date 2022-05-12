import Polaroid from "../components/Polaroid";

const styles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, 25rem)",
  gap: "2em",
  justifyItems: "center",
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",
  padding: "2em",
};

const work = [
  {
    imageUrl:
      "https://instagram.fhio2-1.fna.fbcdn.net/v/t51.2885-15/917146_403664139771881_1214509615_n.jpg",
    title: "Global Stand-Up",
    tech: "NodeJS, Express, Mongoose, and MongoDB.",
    description:
      "A social media back end for collaboration. Share what you're working on today.",
    siteUrl: "https://global-stand-up.herokuapp.com",
    codeUrl: "https://github.com/jmichaelbrown8/global-stand-up",
  },
  {
    imageUrl: "/media/elevatorpitch.space.png",
    title: "Elevator Pitch",
    tech: "Node, express, mysql2, sequelize, bcrypt, and handlebars.",
    description: "A space to pitch ideas and look for collaborators.",
    siteUrl: "https://elevatorpitch.space",
    codeUrl: "https://github.com/jmichaelbrown8/elevator-pitch",
  },
  {
    imageUrl: "/media/tutortea.png",
    title: "Tutor Tea",
    tech: "Node, express, mysql2, sequelize, bcrypt, and handlebars.",
    description:
      "Rate and review your tutor to help others in bootcamp to get paired up.",
    siteUrl: "https://tutortea.com/",
    codeUrl: "https://github.com/jmichaelbrown8/tutortea",
  },
  {
    imageUrl: "/media/agility-help.png",
    title: "Agility Help",
    tech: "Node, express, mysql2, sequelize, bcrypt, handlebars, mui css library, and toastify js library.",
    description: "A blog site for helpful agile software development tips.",
    siteUrl: "https://agility-help.herokuapp.com/",
    codeUrl: "https://github.com/jmichaelbrown8/agility-help",
  },
];

function Photos() {
  return (
    <container
      style={{
        textAlign: "center",
      }}
    >
      <h5>Coming soon</h5>
    </container>
  );
  return (
    <section style={styles} className="gallery">
      {work.map((workItem) => (
        <Polaroid key={workItem.title} {...workItem} highlight="yellow" />
      ))}
    </section>
  );
}

export default Photos;
