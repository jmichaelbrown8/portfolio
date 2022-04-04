import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

function Footer() {
  return (
    <footer>
      <a
        className="red"
        href="https://github.com/jmichaelbrown8"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="fa-2x" icon={brands("github")} />
      </a>
      <a
        className="orange"
        href="https://www.linkedin.com/in/jmichaelbrown/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="fa-2x" icon={brands("linkedin")} />
      </a>
      <a
        className="yellow darken-1"
        href="https://www.instagram.com/kodachromeiphone"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="fa-2x" icon={brands("instagram")} />
      </a>
      <a
        className="green"
        href="https://twitter.com/jmichaelcodes"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="fa-2x" icon={brands("twitter")} />
      </a>
      <a
        className="blue"
        href="https://www.instagram.com/monochromeiphone"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="fa-2x" icon={brands("instagram")} />
      </a>
    </footer>
  );
}

export default Footer;
