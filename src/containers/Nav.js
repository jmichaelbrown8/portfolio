import NavLink from "../components/NavLink";
import "./Nav.css";

const styles = {
  display: "grid",
  gridAutoFlow: "column",
  gridTemplateColumns: "repeat(5, 1fr)",
};

function Nav({ currentPage, handlePageChange }) {
  return (
    <nav className="grey darken-3 z-depth-0" style={styles}>
      <NavLink
        className="red"
        text="about"
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
      <NavLink
        className="orange"
        text="front end"
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
      <NavLink
        className="yellow darken-1 black-text"
        text="back end"
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
      <NavLink
        className="green"
        text="resume"
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
      <NavLink
        className="blue"
        text="contact"
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
    </nav>
  );
}

export default Nav;
