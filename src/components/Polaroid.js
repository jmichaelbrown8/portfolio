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
    <div class="frame z-depth-5">
      <div class="image" style={myStyles}></div>
      <div class="label">
        <h3>{title}</h3>
        <p>{description}</p>
        <div class="links">
          <a href={siteUrl} target="_blank">
            site
          </a>
          <a href={codeUrl} target="_blank">
            code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Polaroid;
