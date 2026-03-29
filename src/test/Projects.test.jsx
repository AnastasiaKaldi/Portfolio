import { render, screen, fireEvent } from "@testing-library/react";
import Projects from "../Projects";

jest.mock("../components/ElectricBorder", () => {
  return function MockElectricBorder({ children }) {
    return <div data-testid="electric-border">{children}</div>;
  };
});

describe("Projects Section", () => {
  it("renders the section with correct id", () => {
    const { container } = render(<Projects />);
    const section = container.querySelector("#projects");
    expect(section).toBeInTheDocument();
  });

  it("renders section label", () => {
    render(<Projects />);
    expect(screen.getByText("02 / Work")).toBeInTheDocument();
  });

  it("renders the heading", () => {
    render(<Projects />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("renders all four project titles", () => {
    render(<Projects />);
    expect(screen.getByText("Iqra International")).toBeInTheDocument();
    expect(screen.getByText("Cosmos")).toBeInTheDocument();
    expect(screen.getByText("Side Studio")).toBeInTheDocument();
    expect(screen.getByText("Cricos Marketing")).toBeInTheDocument();
  });

  it("renders project subtitles", () => {
    render(<Projects />);
    expect(screen.getByText("Business Solutions Platform")).toBeInTheDocument();
    expect(screen.getByText("3D Space Exploration")).toBeInTheDocument();
    expect(screen.getByText("Marketing & Management Agency")).toBeInTheDocument();
    expect(screen.getByText("Brand Marketing Platform")).toBeInTheDocument();
  });

  it("renders project descriptions", () => {
    render(<Projects />);
    expect(screen.getByText(/Australian-based company providing tailored/i)).toBeInTheDocument();
    expect(screen.getByText(/Greek marketing and management company/i)).toBeInTheDocument();
  });

  it("renders tech tags for projects", () => {
    render(<Projects />);
    const reactTags = screen.getAllByText("React");
    expect(reactTags.length).toBeGreaterThanOrEqual(1);
  });

  it("renders View Project text on cards", () => {
    render(<Projects />);
    const viewLinks = screen.getAllByText("View Project");
    expect(viewLinks).toHaveLength(4);
  });

  it("does not render Project Musa", () => {
    render(<Projects />);
    expect(screen.queryByText("Project Musa")).not.toBeInTheDocument();
  });

  it("opens project overlay on card click", () => {
    render(<Projects />);
    const viewButtons = screen.getAllByText("View Project");
    const firstCard = viewButtons[0].closest("[class*='cursor-pointer']");
    if (firstCard) {
      fireEvent.click(firstCard);
      expect(screen.getByText("Visit Live Site")).toBeInTheDocument();
      expect(screen.getByText("View Source")).toBeInTheDocument();
    }
  });
});
