import { render, screen, fireEvent } from "@testing-library/react";
import About from "../About";

describe("About Section", () => {
  it("renders the section with correct id", () => {
    const { container } = render(<About />);
    const section = container.querySelector("#about");
    expect(section).toBeInTheDocument();
  });

  it("renders the section label", () => {
    render(<About />);
    expect(screen.getByText("01 / About")).toBeInTheDocument();
  });

  it("renders the heading", () => {
    render(<About />);
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("renders backstory mentioning developer and tester", () => {
    render(<About />);
    expect(screen.getByText(/developer I craft/i)).toBeInTheDocument();
    expect(screen.getByText(/tester I hunt bugs/i)).toBeInTheDocument();
  });

  it("renders Maggie and Beau in backstory", () => {
    render(<About />);
    expect(screen.getByText(/Maggie the Labrador/i)).toBeInTheDocument();
    expect(screen.getByText(/Beau the German Shepherd/i)).toBeInTheDocument();
  });

  it("renders character sheet", () => {
    render(<About />);
    expect(screen.getByText("Character Sheet")).toBeInTheDocument();
  });

  it("renders character details", () => {
    const { container } = render(<About />);
    const text = container.textContent;
    expect(text).toContain("Developer / Tester");
    expect(text).toContain("Chaotic Good");
    expect(text).toContain("Greece");
    expect(text).toContain("Leeds, UK");
  });

  it("renders ability scores", () => {
    render(<About />);
    expect(screen.getByText("STR")).toBeInTheDocument();
    expect(screen.getByText("DEX")).toBeInTheDocument();
    expect(screen.getByText("CON")).toBeInTheDocument();
    expect(screen.getByText("INT")).toBeInTheDocument();
    expect(screen.getByText("WIS")).toBeInTheDocument();
    expect(screen.getByText("CHA")).toBeInTheDocument();
  });

  it("renders proficiency bars", () => {
    render(<About />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
    expect(screen.getByText("Testing / QA")).toBeInTheDocument();
    expect(screen.getByText("CSS / Tailwind")).toBeInTheDocument();
  });

  it("renders feats", () => {
    render(<About />);
    expect(screen.getByText("Scholar of Music")).toBeInTheDocument();
    expect(screen.getByText("Self-Taught Arcana")).toBeInTheDocument();
    expect(screen.getByText("Eagle-Eyed Tester")).toBeInTheDocument();
  });

  it("renders active quests", () => {
    render(<About />);
    expect(screen.getByText("The Ballad of Sound")).toBeInTheDocument();
    expect(screen.getByText("The Infinite Codebase")).toBeInTheDocument();
    expect(screen.getByText("Arena of Champions")).toBeInTheDocument();
  });

  it("renders companions", () => {
    render(<About />);
    expect(screen.getAllByText("Espeon").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("Maggie")).toBeInTheDocument();
    expect(screen.getByText("Beau")).toBeInTheDocument();
  });

  it("renders Espeon sprite image", () => {
    render(<About />);
    const espeonImgs = screen.getAllByAltText("Espeon");
    expect(espeonImgs.length).toBeGreaterThanOrEqual(1);
    expect(espeonImgs[0].src).toContain("196.gif");
  });

  it("toggles Espeon to shiny on click", () => {
    render(<About />);
    const espeonImgs = screen.getAllByAltText("Espeon");
    const espeonImg = espeonImgs[0];
    expect(espeonImg.src).toContain("/animated/196.gif");
    fireEvent.click(espeonImg);
    expect(espeonImg.src).toContain("/shiny/196.gif");
  });

  it("renders campaign status", () => {
    render(<About />);
    expect(screen.getByText(/CAMPAIGN: ACTIVE/i)).toBeInTheDocument();
  });

  it("does not contain em-dashes", () => {
    const { container } = render(<About />);
    const textContent = container.textContent;
    expect(textContent).not.toContain("—");
  });
});
