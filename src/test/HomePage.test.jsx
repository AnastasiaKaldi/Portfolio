import { render, screen } from "@testing-library/react";
import HomePage from "../HomePage";

jest.mock("../components/Aurora", () => {
  return function MockAurora() {
    return <div data-testid="aurora-mock" />;
  };
});

describe("HomePage", () => {
  it("renders the name", () => {
    render(<HomePage />);
    expect(screen.getByText("Anastasia")).toBeInTheDocument();
    expect(screen.getByText("Kaldi")).toBeInTheDocument();
  });

  it("renders the Creative Developer label", () => {
    render(<HomePage />);
    expect(screen.getByText("Creative Developer")).toBeInTheDocument();
  });

  it("renders the bio text mentioning developer and tester", () => {
    render(<HomePage />);
    const bio = screen.getByText(/self-taught developer and tester/i);
    expect(bio).toBeInTheDocument();
  });

  it("renders social links", () => {
    render(<HomePage />);
    const links = screen.getAllByRole("link");
    const hrefs = links.map((l) => l.getAttribute("href"));
    expect(hrefs.some((h) => h.includes("linkedin"))).toBe(true);
    expect(hrefs.some((h) => h.includes("github"))).toBe(true);
    expect(hrefs.some((h) => h.includes("mailto"))).toBe(true);
  });

  it("renders all social links with target _blank", () => {
    render(<HomePage />);
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  it("renders skill tags", () => {
    render(<HomePage />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Three.js")).toBeInTheDocument();
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("Tailwind")).toBeInTheDocument();
  });

  it("renders the scroll indicator button", () => {
    render(<HomePage />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the Aurora background", () => {
    render(<HomePage />);
    expect(screen.getByTestId("aurora-mock")).toBeInTheDocument();
  });

  it("has hero section with correct id", () => {
    const { container } = render(<HomePage />);
    const section = container.querySelector("#hero");
    expect(section).toBeInTheDocument();
  });
});
