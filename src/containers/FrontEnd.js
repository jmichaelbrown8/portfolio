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
    imageUrl: "/media/scrumgame.jpg",
    title: "Scrum Game",
    description:
      "Test your Scrum framework knowledge with a drag and drop puzzle.",
    tech: "React and react-beautiful-dnd.",
    siteUrl: "https://agility.help/scrumgame/",
    codeUrl: "https://github.com/jmichaelbrown8/scrum-game",
  },
  {
    imageUrl: "/media/markup.png",
    title: "Markup",
    description:
      "A progressive web app (PWA) text editor for jotting down code snippets.",
    tech: "NodeJS, IndexedDB, CodeMirror, workbox, webpack, and babel.",
    siteUrl: "https://lit-river-74989.herokuapp.com/",
    codeUrl: "https://github.com/jmichaelbrown8/markup",
  },
  {
    imageUrl: "/media/grill.png",
    title: "Grill: Food and Friends",
    tech: "Foundation CSS library, and jQuery. Third-party APIs: edamam and jservice.",
    description:
      "Search for recipes to grill while grilling your friends with trivia!",
    siteUrl: "https://grill-n.herokuapp.com/",
    codeUrl: "https://github.com/jmichaelbrown8/grill",
  },
  {
    imageUrl: "/media/portfolio.png",
    title: "Portfolio",
    tech: "React and Materialize CSS library.",
    description: "This portfolio to showcase some of my projects.",
    siteUrl: "https://jmichaelbrown.codes/",
    codeUrl: "https://github.com/jmichaelbrown8/portfolio",
  },
];

function FrontEnd() {
  return (
    <section style={styles}>
      {work.map((workItem) => (
        <Polaroid key={workItem.title} {...workItem} />
      ))}
    </section>
  );
}

export default FrontEnd;
