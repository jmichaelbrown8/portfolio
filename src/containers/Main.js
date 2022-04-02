import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Resume from "./Resume";

const styles = {
  display: "grid",
};

function Main() {
  return (
    <main style={styles}>
      <About />

      <Work />

      <Contact />

      <Resume />
    </main>
  );
}

export default Main;
