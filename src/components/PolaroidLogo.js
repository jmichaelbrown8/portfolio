import "./PolaroidLogo.css";

const styles = {
  height: "0.5rem",
  width: "9rem",
  display: "grid",
  margin: "0.5rem auto 0",
  position: "relative",
  left: "-11.5rem",
  gridTemplateColumns: "repeat(5, 1fr)",
};

function PolaroidLogo() {
  return (
    <div style={styles} className="polaroid-logo">
      <div className="red"></div>
      <div className="orange"></div>
      <div className="yellow darken-1"></div>
      <div className="green"></div>
      <div className="blue"></div>
    </div>
  );
}

export default PolaroidLogo;
