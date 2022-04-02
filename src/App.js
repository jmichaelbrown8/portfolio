import Header from "./containers/Header";
import Main from "./containers/Main";
import Footer from "./containers/Footer";

const styles = {
  margin: "0",
  padding: "0",
  display: "grid",
  alignContent: "space-between",
};

function App() {
  return (
    <div className="grey darken-3 text-light" style={styles}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
