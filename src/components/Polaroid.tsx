import React, { useState } from "react";
import "./Polaroid.css";

interface InfoProps {
  description?: string;
  tech?: string;
  siteUrl?: string;
  codeUrl?: string;
}

export interface PolaroidProps extends InfoProps {
  imageUrl: string;
  title?: React.ReactNode;
}

const Info = ({ description, tech, siteUrl, codeUrl }: InfoProps) => {
  return (
    <div className="container info white-text">
      {description && <div style={{ alignSelf: "end" }}>{description}</div>}
      {tech && <div style={{ alignSelf: "start" }}>{tech}</div>}

      <div className="links">
        {siteUrl && (
          <a
            data-testid="site-link"
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn blue waves-effect"
          >
            site
          </a>
        )}
        {codeUrl && (
          <a
            data-testid="code-link"
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn blue waves-effect"
          >
            code
          </a>
        )}
      </div>
    </div>
  );
};

export const Polaroid = ({
  imageUrl,
  title,
  description,
  siteUrl,
  codeUrl,
  tech,
}: PolaroidProps) => {
  const myStyles = {
    backgroundImage: `url(${imageUrl})`,
  };

  const [active, setActive] = useState(false);

  const makeActive = () => {
    if (description || siteUrl || codeUrl || tech) {
      setActive(true);
    }
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
          />
        ) : null}
      </div>
      <div className="label">{title ? <h3>{title}</h3> : null}</div>
    </div>
  );
};
