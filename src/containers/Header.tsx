import React from "react";
import { PolaroidLogo } from "../components/PolaroidLogo";
import { Nav, NavProps } from "./Nav";
import "./Header.css";

export const Header = (props: NavProps) => {
  return (
    <header className="grey darken-4">
      <h1>
        J. Michael Brown
        <PolaroidLogo />
      </h1>

      <h5>Full Stack Software Engineer</h5>

      <Nav {...props} />
    </header>
  );
};
