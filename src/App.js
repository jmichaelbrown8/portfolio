import { useState } from "react";
import Header from "./containers/Header";
import About from "./containers/About";
import Work from "./containers/Work";
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
      case "work":
        return <Work />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="grey darken-3 text-light" style={styles.body}>
      <Header handlePageChange={handlePageChange} />
      <main style={styles.main}>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
