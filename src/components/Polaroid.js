import { useState } from "react";
import "./Polaroid.css";

function Info({ description, tech, siteUrl, codeUrl }) {
  return (
    <div className="container info black text-white">
      {description && <div style={{ alignSelf: "end" }}>{description}</div>}
      {tech && <div style={{ alignSelf: "start" }}>{tech}</div>}
      {siteUrl && codeUrl && (
        <div className="links">
          <a href={siteUrl} target="_blank" rel="noreferrer">
            site
          </a>
          <a href={codeUrl} target="_blank" rel="noreferrer">
            code
          </a>
        </div>
      )}
    </div>
  );
}

function Polaroid({
  imageUrl,
  title,
  description,
  siteUrl,
  codeUrl,
  highlight,
  tech,
}) {
  const myStyles = {
    backgroundImage: `url(${imageUrl})`,
  };

  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  const makeActive = () => {
    setActive(true);
  };

  const makeInactive = () => {
    setActive(false);
  };

  return (
    <div
      className={"frame z-depth-5 " + (active ? "active" : "")}
      onMouseEnter={makeActive}
      onMouseLeave={makeInactive}
    >
      <div className="image" style={myStyles}>
        {description ? (
          <Info
            description={description}
            tech={tech}
            siteUrl={siteUrl}
            codeUrl={codeUrl}
            highlight={highlight}
          />
        ) : null}
      </div>
      <div className="label">{title ? <h3>{title}</h3> : null}</div>
    </div>
  );
}

export default Polaroid;
