import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders my name", () => {
  render(<App />);
  const nameElement = screen.getByText(/J. Michael Brown/i);
  expect(nameElement).toBeInTheDocument();
});
