import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

describe("Home component", () => {
  it("renders home", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  it("renders heading", () => {
    render(<Home />);
    expect(screen.getByRole("heading").textContent).toMatch(
      /The Everything Shop/i,
    );
  });

  it("renders image with correct source path", () => {
    render(<Home />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute(
      "src",
      "../../../public/old-man-portrait.jpg",
    );
  });
});
