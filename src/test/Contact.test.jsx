import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "../Contact";

jest.mock("@emailjs/browser", () => ({
  __esModule: true,
  default: { send: jest.fn(() => Promise.resolve()) },
}));

describe("Contact Section", () => {
  it("renders the section with correct id", () => {
    const { container } = render(<Contact />);
    const section = container.querySelector("#contact");
    expect(section).toBeInTheDocument();
  });

  it("renders the section label", () => {
    render(<Contact />);
    expect(screen.getByText("03 / Contact")).toBeInTheDocument();
  });

  it("renders the postcard heading", () => {
    render(<Contact />);
    expect(screen.getByText(/Let's work/i)).toBeInTheDocument();
    expect(screen.getByText("together.")).toBeInTheDocument();
  });

  it("renders Dear Anastasia greeting", () => {
    render(<Contact />);
    expect(screen.getByText("Dear Anastasia,")).toBeInTheDocument();
  });

  it("renders form fields", () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText("Your name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("your@email.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/I'd love to work with you/i)).toBeInTheDocument();
  });

  it("renders form labels", () => {
    render(<Contact />);
    expect(screen.getByText("From")).toBeInTheDocument();
    expect(screen.getByText("Return Address")).toBeInTheDocument();
    expect(screen.getByText("Message")).toBeInTheDocument();
  });

  it("renders submit button", () => {
    render(<Contact />);
    const button = screen.getByRole("button", { name: /post it/i });
    expect(button).toBeInTheDocument();
  });

  it("allows typing in form fields", () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText("Your name");
    const emailInput = screen.getByPlaceholderText("your@email.com");

    fireEvent.change(nameInput, { target: { value: "Test User" } });
    fireEvent.change(emailInput, { target: { value: "test@test.com" } });

    expect(nameInput.value).toBe("Test User");
    expect(emailInput.value).toBe("test@test.com");
  });

  it("renders the stamp", () => {
    render(<Contact />);
    expect(screen.getByText("Postage")).toBeInTheDocument();
  });

  it("renders recipient address", () => {
    render(<Contact />);
    expect(screen.getByText("Anastasia Kaldi")).toBeInTheDocument();
    expect(screen.getByText("Creative Developer")).toBeInTheDocument();
    expect(screen.getByText("Leeds, United Kingdom")).toBeInTheDocument();
  });

  it("renders availability status", () => {
    render(<Contact />);
    expect(screen.getByText("Available for work")).toBeInTheDocument();
  });

  it("renders social links with correct hrefs", () => {
    render(<Contact />);
    const links = screen.getAllByRole("link");
    const hrefs = links.map((l) => l.getAttribute("href"));
    expect(hrefs.some((h) => h.includes("linkedin"))).toBe(true);
    expect(hrefs.some((h) => h.includes("github"))).toBe(true);
    expect(hrefs.some((h) => h.includes("mailto"))).toBe(true);
  });

  it("form fields are required", () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText("Your name")).toBeRequired();
    expect(screen.getByPlaceholderText("your@email.com")).toBeRequired();
  });
});
