import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Shop } from "./Shop";
import * as shopItems from "../shop-items";

describe("Shop component", () => {
  it("renders shop", () => {
    const { container } = render(<Shop />);
    expect(container).toMatchSnapshot();
  });

  it("renders shop with correct length of grid items", async () => {
    let id;
    const mockItems = [
      {
        title: "Item A",
        category: "Category 1",
        image: "/dummy/path",
        id: id++,
        price: 10,
        description: "item description of A",
      },
      {
        title: "Item B",
        category: "Category 1",
        image: "/dummy/path",
        id: id++,
        price: 20,
        description: "item description of B",
      },
      {
        title: "Item C",
        category: "Category 2",
        image: "/dummy/path",
        id: id++,
        price: 20,
        description: "item description of C",
      },
    ];
    vi.spyOn(shopItems, "shopItems").mockResolvedValue(mockItems);
    render(<Shop />);

    await screen.findByText("Item A"); // wait for items to complete loading

    expect(document.querySelector("main").children.length).toBe(
      mockItems.length,
    );

    const categoryTwo = screen.getByText("Category 2");
    fireEvent.click(categoryTwo);

    await screen.findByText("Item C");
    expect(document.querySelector("main").children.length).toBe(
      mockItems.filter((item) => item.category === "Category 2").length,
    );
  });
});
