import Nav from "./Nav";

const styles = {
  display: "grid",
  justifyItems: "stretch",
  alignItems: "stretch",
  textAlign: "center",
};

function Header({ currentPage, handlePageChange }) {
  return (
    <header style={styles} className="grey darken-4">
      <h1>J. Michael Brown</h1>
      <h5>Full Stack Software Engineer</h5>

      <Nav handlePageChange={handlePageChange} currentPage={currentPage} />
    </header>
  );
}

export default Header;
