import { useState } from "react";
import Header from "./containers/Header";
import About from "./containers/About";
import FrontEnd from "./containers/FrontEnd";
import BackEnd from "./containers/BackEnd";
import Contact from "./containers/Contact";
import Resume from "./containers/Resume";
import Footer from "./containers/Footer";

const styles = {
  body: {
    margin: "0",
    padding: "0",
    height: "100%",
    display: "grid",
    alignContent: "space-between",
  },
  main: {
    display: "grid",
  },
};

function App() {
  const [currentPage, setCurrentPage] = useState("about");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "front end":
        return <FrontEnd />;
      case "back end":
        return <BackEnd />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="grey darken-4 text-light" style={styles.body}>
      <Header handlePageChange={handlePageChange} currentPage={currentPage} />
      <main style={styles.main}>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;