import NavLink from "../components/NavLink";

const styles = {
  display: "grid",
  gridAutoFlow: "column",
  gridTemplateColumns: "repeat(5, 1fr)",
};

function Nav({ handlePageChange }) {
  return (
    <nav className="grey darken-4 z-depth-0" style={styles}>
      <NavLink
        className="red"
        text="about"
        handlePageChange={handlePageChange}
      />
      <NavLink
        className="orange"
        text="work"
        handlePageChange={handlePageChange}
      />
      <NavLink
        className="yellow darken-1"
        text="photos"
        handlePageChange={handlePageChange}
      />
      <NavLink
        className="green"
        text="contact"
        handlePageChange={handlePageChange}
      />
      <NavLink
        className="blue"
        text="resume"
        handlePageChange={handlePageChange}
      />
    </nav>
  );
}

export default Nav;
