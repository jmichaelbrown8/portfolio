import Polaroid from "../components/Polaroid";

const styles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, 21em)",
  gap: "2em",
  justifyItems: "center",
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",
  padding: "2em",
};

const work = [
  {
    imageUrl: "/media/elevatorpitch.space.png",
    title: "Elevator Pitch",
    description: "A space to pitch ideas and look for collaborators.",
    siteUrl: "https://elevatorpitch.space",
    codeUrl: "https://github.com/jmichaelbrown8/elevator-pitch",
  },
  {
    imageUrl: "/media/grill.png",
    title: "Grill: Food and Friends",
    description:
      "Search for recipes to grill while grilling your friends with trivia!",
    siteUrl: "https://grill-n.herokuapp.com/",
    codeUrl: "https://github.com/jmichaelbrown8/grill",
  },
  {
    imageUrl: "/media/tutortea.png",
    title: "Tutor Tea",
    description:
      "Rate and review your tutor to help others in bootcamp to get paired up.",
    siteUrl: "https://tutortea.com/",
    codeUrl: "https://github.com/jmichaelbrown8/tutortea",
  },
  {
    imageUrl: "/media/agility-help.png",
    title: "Agility Help",
    description: "A blog site for helpful agile software development tips.",
    siteUrl: "https://agility-help.herokuapp.com/",
    codeUrl: "https://github.com/jmichaelbrown8/agility-help",
  },
  {
    imageUrl: "/media/scrumgame.jpg",
    title: "Scrum Game",
    description: "Test your Scrum framework knowledge.",
    siteUrl: "https://agility.help/scrumgame/",
    codeUrl: "https://github.com/jmichaelbrown8/scrum-game",
  },
];

function Work() {
  return (
    <section style={styles}>
      {work.map((workItem) => (
        <Polaroid {...workItem} />
      ))}
    </section>
  );
}

export default Work;
