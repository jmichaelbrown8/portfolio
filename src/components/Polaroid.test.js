import { render, screen } from "@testing-library/react";
import Polaroid from "./Polaroid";

test("renders no text without props", () => {
  render(<Polaroid />);
  const textElement = screen.queryByText(/[A-Z]/i);
  expect(textElement).not.toBeInTheDocument();
});

test("renders the title prop", () => {
  render(<Polaroid title="Polaroid Title" />);
  const textElement = screen.queryByText(/Polaroid Title/);
  expect(textElement).toBeInTheDocument();
});

test("renders the description prop", () => {
  render(<Polaroid description="Polaroid description" />);
  const textElement = screen.queryByText(/Polaroid description/);
  expect(textElement).toBeInTheDocument();
});

test("renders the link props", () => {
  render(<Polaroid siteUrl="test" codeUrl="test" />);
  const siteLinkElement = screen.queryByText(/site/i);
  const codeLinkElement = screen.queryByText(/code/i);
  expect(siteLinkElement).toBeInTheDocument();
  expect(codeLinkElement).toBeInTheDocument();
});
