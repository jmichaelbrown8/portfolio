import React from "react";
import { render, screen } from "@testing-library/react";
import { Polaroid, PolaroidProps } from "./Polaroid";

const props: PolaroidProps = {
  imageUrl: "test.png",
};
const propsWithDescription: PolaroidProps = {
  imageUrl: "test.png",
  description: "Test description",
};

describe("Polaroid", () => {
  it("renders no text without props", () => {
    render(<Polaroid {...props} />);
    const textElement = screen.queryByText(/[A-Z]/i);
    expect(textElement).not.toBeInTheDocument();
  });

  it("renders the title prop", () => {
    const testTitle = "Polaroid title";
    render(<Polaroid {...props} title={testTitle} />);
    const textElement = screen.queryByText(testTitle);
    expect(textElement).toBeInTheDocument();
  });

  it("renders the description prop", () => {
    const testDescription = "Polaroid description";
    render(
      <Polaroid {...propsWithDescription} description={testDescription} />
    );
    const textElement = screen.queryByText(testDescription);
    expect(textElement).toBeInTheDocument();
  });

  it("renders the site link", () => {
    render(<Polaroid {...propsWithDescription} siteUrl="test" />);
    const siteLinkElement = screen.getByTestId("site-link");
    expect(siteLinkElement).toBeInTheDocument();
  });

  it("renders the code link", () => {
    render(<Polaroid {...propsWithDescription} codeUrl="test" />);
    const codeLinkElement = screen.getByTestId("code-link");
    expect(codeLinkElement).toBeInTheDocument();
  });
});
