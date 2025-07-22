import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Shop } from "../Shop/Shop.jsx";
import * as shopItems from "../shop-items";

describe("Cart component", () => {
  const mockItems = [
    {
      title: "Item A",
      category: "Category 1",
      image: "/dummy/path",
      id: 0,
      price: 10,
      description: "item description of A",
    },
    {
      title: "Item B",
      category: "Category 1",
      image: "/dummy/path",
      id: 1,
      price: 20,
      description: "item description of B",
    },
    {
      title: "Item C",
      category: "Category 2",
      image: "/dummy/path",
      id: 2,
      price: 30,
      description: "item description of C",
    },
  ];
  it("adding item to cart populates cart", async () => {
    vi.spyOn(shopItems, "shopItems").mockResolvedValue(mockItems);
    render(<Shop />);

    await screen.findByText("Item A");

    const categoryTwo = screen.getByText("Category 2");
    fireEvent.click(categoryTwo);

    await screen.findByText("Item C");

    const plusButton = screen.getByText("+");
    fireEvent.click(plusButton);

    const addButton = screen.getByText("Add to cart");
    fireEvent.click(addButton);

    const cartButton = screen.getByAltText("cart");
    fireEvent.click(cartButton);

    expect(screen.getByText("Item C")).toBeInTheDocument();
    expect(screen.getByText("Quantity: 1")).toBeInTheDocument();
    expect(screen.getByText("Unit price: $30.00")).toBeInTheDocument();
    expect(screen.getByText("Total price: $30.00")).toBeInTheDocument();

    vi.restoreAllMocks();
  });

  it("subtract button works", async () => {
    vi.spyOn(shopItems, "shopItems").mockResolvedValue(mockItems);
    render(<Shop />);

    await screen.findByText("Item A");

    const categoryTwo = screen.getByText("Category 2");
    fireEvent.click(categoryTwo);

    await screen.findByText("Item C");

    const plusButton = screen.getByText("+");
    const minusButton = screen.getByText("-");
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    fireEvent.click(minusButton);

    const addButton = screen.getByText("Add to cart");
    fireEvent.click(addButton);

    const cartButton = screen.getByAltText("cart");
    fireEvent.click(cartButton);

    expect(screen.getByText("Item C")).toBeInTheDocument();
    expect(screen.getByText("Quantity: 2")).toBeInTheDocument();
    expect(screen.getByText("Unit price: $30.00")).toBeInTheDocument();
    expect(screen.getByText("Total price: $60.00")).toBeInTheDocument();

    vi.restoreAllMocks();
  });
  it("cart buttons work", async () => {
    vi.spyOn(shopItems, "shopItems").mockResolvedValue(mockItems);
    render(<Shop />);

    await screen.findByText("Item A");

    const categoryTwo = screen.getByText("Category 2");
    fireEvent.click(categoryTwo);

    await screen.findByText("Item C");

    let plusButton = screen.getByText("+");
    let minusButton = screen.getByText("-");
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    fireEvent.click(minusButton);

    const addButton = screen.getByText("Add to cart");
    fireEvent.click(addButton);

    const cartButton = screen.getByAltText("cart");
    fireEvent.click(cartButton);

    plusButton = screen.getByText("+");
    minusButton = screen.getByText("-");
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    fireEvent.click(minusButton);

    const updateButton = screen.getByText("Update");
    fireEvent.click(updateButton);

    expect(screen.getByText("Item C")).toBeInTheDocument();
    expect(screen.getByText("Quantity: 4")).toBeInTheDocument();
    expect(screen.getByText("Unit price: $30.00")).toBeInTheDocument();
    expect(screen.getByText("Total price: $120.00")).toBeInTheDocument();

    vi.restoreAllMocks();
  });

  it("message shown for empty cart", async () => {
    vi.spyOn(shopItems, "shopItems").mockResolvedValue(mockItems);
    render(<Shop />);

    await screen.findByText("Item A");

    const cartButton = screen.getByAltText("cart");
    fireEvent.click(cartButton);

    expect(
      screen.getByText("Your cart is empty. Add some items!"),
    ).toBeInTheDocument();

    vi.restoreAllMocks();
  });
});
