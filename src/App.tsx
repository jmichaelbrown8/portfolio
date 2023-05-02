import React, { useState, useEffect } from "react";
import { Header } from "./containers/Header";
import { About } from "./containers/About";
import { Projects } from "./containers/Projects";
import { Photos } from "./containers/Photos";
import { Contact } from "./containers/Contact";
import { Resume } from "./containers/Resume";
import { Footer } from "./containers/Footer";
import { Film } from "./containers/Film";
import "./App.css";

export const App = () => {
  const [currentPage, setCurrentPage] = useState(
    window.location.hash || "#about"
  );

  useEffect(() => {
    window.addEventListener("popstate", () => {
      setCurrentPage(window.location.hash);
    });

    return () => {
      window.removeEventListener("popstate", () => {});
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
        return null;
    }
  };

  const handlePageChange = (page: string) => setCurrentPage(page);

  return (
    <div className="app grey darken-4 text-light">
      <Header handlePageChange={handlePageChange} currentPage={currentPage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
};
