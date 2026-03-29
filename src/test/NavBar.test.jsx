import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "../NavBar";

jest.mock("../assets/ThePowerBG3.mp3", () => "test-file-stub");

describe("NavBar", () => {
  it("renders the logo", () => {
    render(<NavBar />);
    expect(screen.getByText("AK")).toBeInTheDocument();
  });

  it("renders desktop navigation links", () => {
    render(<NavBar />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders sound toggle button", () => {
    render(<NavBar />);
    const soundButtons = screen.getAllByRole("button");
    expect(soundButtons.length).toBeGreaterThanOrEqual(1);
  });

  it("has fixed positioning", () => {
    const { container } = render(<NavBar />);
    const nav = container.querySelector("nav");
    expect(nav).toHaveClass("fixed");
    expect(nav).toHaveClass("top-0");
    expect(nav).toHaveClass("z-50");
  });

  it("applies backdrop blur class", () => {
    const { container } = render(<NavBar />);
    const nav = container.querySelector("nav");
    expect(nav).toHaveClass("backdrop-blur-xl");
  });

  it("logo click does not throw", () => {
    render(<NavBar />);
    const logo = screen.getByText("AK");
    fireEvent.click(logo);
  });
});
