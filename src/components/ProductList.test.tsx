import { render, screen } from "@testing-library/react";
import ProductList from "./ProductList";

test("renders 2 products", () => {
  const products = ["Loose Cropped Jeans (Damaged)", "Smart Skort Solid"];
  render(<ProductList items={products} />);

  expect(screen.getAllByRole('listitem')).toHaveLength(2);
});
