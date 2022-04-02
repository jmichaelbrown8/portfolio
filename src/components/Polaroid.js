import "./Polaroid.css";

const styles = {
  backgroundPosition: "center",
  backgroundSize: "cover",
};

function Polaroid({ imageUrl, title, description, siteUrl, codeUrl }) {
  const myStyles = {
    backgroundImage: `url(${imageUrl})`,
    ...styles,
  };
  return (
    <div className="frame z-depth-5">
      <div className="image" style={myStyles}></div>
      <div className="label">
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
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
    </div>
  );
}

export default Polaroid;
