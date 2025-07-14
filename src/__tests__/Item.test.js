import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Item from "../components/Item";

describe("<Item /> component", () => {
  test("renders an <li> without 'in-cart' at start", () => {
    const { container } = render(<Item name="Milk" category="Dairy" />);
    const li = container.querySelector("li");
    expect(li).toBeInTheDocument();
    expect(li).not.toHaveClass("in-cart");
  });

  test("li gets 'in-cart' class when Add to Cart is clicked", () => {
    const { container } = render(<Item name="Milk" category="Dairy" />);
    const btn = screen.getByRole("button", { name: /add to cart/i });
    fireEvent.click(btn);
    const li = container.querySelector("li");
    expect(li).toHaveClass("in-cart");
  });

  test("button text toggles between Add to Cart and Remove From Cart", () => {
    render(<Item name="Milk" category="Dairy" />);
    const btn = screen.getByRole("button", { name: /add to cart/i });

    // Initial state: Add to Cart
    expect(btn).toHaveTextContent(/add to cart/i);

    // After clicking: becomes Remove From Cart
    fireEvent.click(btn);
    expect(btn).toHaveTextContent(/remove from cart/i);

    // Clicking again toggles back
    fireEvent.click(btn);
    expect(btn).toHaveTextContent(/add to cart/i);
  });
});
