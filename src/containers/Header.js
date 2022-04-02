import Nav from "./Nav";

const styles = {
  display: "grid",
  justifyItems: "stretch",
  alignItems: "stretch",
  textAlign: "center",
};

function Header() {
  return (
    <header style={styles}>
      <h1>J. Michael Brown</h1>
      <h5>Full Stack Software Engineer</h5>

      <Nav />
    </header>
  );
}

export default Header;
