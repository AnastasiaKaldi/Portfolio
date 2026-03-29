import { render, screen } from "@testing-library/react";
import App from "../App";

jest.mock("../components/Aurora", () => {
  return function MockAurora() {
    return <div data-testid="aurora-mock" />;
  };
});
jest.mock("../components/ElectricBorder", () => {
  return function MockElectricBorder({ children }) {
    return <div data-testid="electric-border">{children}</div>;
  };
});
jest.mock("../assets/ThePowerBG3.mp3", () => "test-file-stub");

describe("App", () => {
  it("renders without crashing", () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  it("renders the navbar", () => {
    render(<App />);
    expect(screen.getAllByText("AK").length).toBeGreaterThanOrEqual(1);
  });

  it("renders all major sections", () => {
    const { container } = render(<App />);
    expect(container.querySelector("#hero")).toBeInTheDocument();
    expect(container.querySelector("#about")).toBeInTheDocument();
    expect(container.querySelector("#projects")).toBeInTheDocument();
    expect(container.querySelector("#contact")).toBeInTheDocument();
  });

  it("renders the noise overlay", () => {
    const { container } = render(<App />);
    const noise = container.querySelector(".noise-overlay");
    expect(noise).toBeInTheDocument();
  });

  it("renders the footer", () => {
    render(<App />);
    expect(screen.getByText("Privacy")).toBeInTheDocument();
    expect(screen.getByText("Licensing")).toBeInTheDocument();
  });
});
