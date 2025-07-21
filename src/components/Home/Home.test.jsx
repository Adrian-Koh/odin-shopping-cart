import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Home } from "./Home";

describe("Home component", () => {
  it("renders home", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
