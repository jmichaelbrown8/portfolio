import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

function Footer() {
  return (
    <footer>
      <a className="red" href="github">
        <FontAwesomeIcon className="fa-2x" icon={brands("github")} />
      </a>
      <a className="orange" href="linkedin">
        <FontAwesomeIcon className="fa-2x" icon={brands("linkedin")} />
      </a>
      <a className="yellow darken-1" href="instagram">
        <FontAwesomeIcon className="fa-2x" icon={brands("instagram")} />
      </a>
      <a className="green" href="twitter">
        <FontAwesomeIcon className="fa-2x" icon={brands("twitter")} />
      </a>
      <a className="blue" href="instagram">
        <FontAwesomeIcon className="fa-2x" icon={brands("instagram")} />
      </a>
    </footer>
  );
}

export default Footer;
