import NavLink from "../components/NavLink";
import "./Nav.css";

function Nav() {
  return (
    <nav className="grey darken-4 z-depth-0">
      <NavLink className="red" text="about" />
      <NavLink className="orange" text="work" />
      <NavLink className="yellow darken-1" text="photos" />
      <NavLink className="green" text="contact" />
      <NavLink className="blue" text="resume" />
    </nav>
  );
}

export default Nav;
