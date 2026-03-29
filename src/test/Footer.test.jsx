import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  it("renders the logo", () => {
    render(<Footer />);
    expect(screen.getByText("AK")).toBeInTheDocument();
  });

  it("renders privacy and licensing buttons", () => {
    render(<Footer />);
    expect(screen.getByText("Privacy")).toBeInTheDocument();
    expect(screen.getByText("Licensing")).toBeInTheDocument();
  });

  it("renders copyright with current year", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it("renders copyright with name", () => {
    render(<Footer />);
    expect(screen.getByText(/Anastasia Kaldi/i)).toBeInTheDocument();
  });

  it("opens privacy policy modal on click", () => {
    render(<Footer />);
    fireEvent.click(screen.getByText("Privacy"));
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
  });

  it("opens licensing modal on click", () => {
    render(<Footer />);
    fireEvent.click(screen.getByText("Licensing"));
    expect(screen.getByText(/intellectual property laws/i)).toBeInTheDocument();
  });

  it("closes privacy modal on close button click", () => {
    render(<Footer />);
    fireEvent.click(screen.getByText("Privacy"));
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Close"));
    expect(screen.queryByText("Privacy Policy")).not.toBeInTheDocument();
  });

  it("closes licensing modal on close button click", () => {
    render(<Footer />);
    fireEvent.click(screen.getByText("Licensing"));
    const heading = screen.getByRole("heading", { name: "Licensing" });
    expect(heading).toBeInTheDocument();
    fireEvent.click(screen.getByText("Close"));
    expect(screen.queryByText(/intellectual property laws/i)).not.toBeInTheDocument();
  });

  it("closes modal on overlay click", () => {
    render(<Footer />);
    fireEvent.click(screen.getByText("Privacy"));
    const overlay = screen.getByText("Privacy Policy").closest(".popup-overlay");
    if (overlay) {
      fireEvent.click(overlay);
      expect(screen.queryByText("Privacy Policy")).not.toBeInTheDocument();
    }
  });
});
