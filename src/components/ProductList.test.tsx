import { render, screen } from "@testing-library/react";
import ProductList from "./ProductList";

test("renders 2 products", () => {
  const products = [
    { name: "Loose Cropped Jeans (Damaged)" },
    { name: "Smart Skort Solid" },
  ];
  render(<ProductList items={products} onRemoveProduct={() => {}} />);

  expect(screen.getAllByRole("listitem")).toHaveLength(2);
});
