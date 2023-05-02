import React from "react";
import { NavLink } from "../components/NavLink";
import "./Nav.css";

export interface NavProps {
  currentPage: any;
  handlePageChange: any;
}

export const Nav = ({ currentPage, handlePageChange }: NavProps) => {
  return (
    <nav className="grey darken-3 z-depth-0">
      <NavLink
        className="red"
        text="about"
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
      <NavLink
        className="orange"
        text="projects"
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
      <NavLink
        className="yellow darken-1 black-text"
        text="photos"
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
      <NavLink
        className="green"
        text="resume"
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
      <NavLink
        className="blue"
        text="contact"
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
    </nav>
  );
};
