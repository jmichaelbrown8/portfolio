import React, { useState, useEffect } from "react";
import Header from "./containers/Header";
import About from "./containers/About";
import Projects from "./containers/Projects";
import Photos from "./containers/Photos";
import Contact from "./containers/Contact";
import Resume from "./containers/Resume";
import Footer from "./containers/Footer";
import Film from "./containers/Film";

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
  const [currentPage, setCurrentPage] = useState(
    window.location.hash || "#about"
  );

  useEffect(() => {
    window.addEventListener("popstate", (event) => {
      setCurrentPage(event.target.location.hash);
    });

    return () => {
      window.removeEventListener("popstate");
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "#about":
        return <About setCurrentPage={setCurrentPage} />;
      case "#projects":
        return <Projects />;
      case "#photos":
        return <Photos />;
      case "#contact":
        return <Contact />;
      case "#resume":
        return <Resume />;
      case "#film":
        return <Film />;
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
