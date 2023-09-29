import { render, screen, within } from "@testing-library/react";
import ProductList from "./ProductList";

test("renders 2 products", () => {
  render(<ProductList />);

  expect(screen.getAllByTestId("product-item")).toHaveLength(2);
});

test("renders product detail", () => {
  render(<ProductList />);

  const firstProduct = screen.getAllByTestId("product-item").at(0);
  if (!firstProduct) {
    throw Error("product not found");
  }
  const aProduct = within(firstProduct);

  expect(aProduct.getByRole("img")).toHaveAttribute(
    "src",
    nextImage(
      "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/448429/item/goods_66_448429.jpg?width=300"
    )
  );
  expect(
    aProduct.getByRole("img", { name: "Loose Cropped Jeans (Damaged)" })
  ).toBeInTheDocument();
  expect(aProduct.getByTestId("product-item--name")).toHaveTextContent(
    "Loose Cropped Jeans (Damaged)"
  );
  expect(aProduct.getByTestId("product-item--price")).toHaveTextContent(
    "$42.57"
  );
});

function nextImage(url: string): string {
  return `/_next/image?url=${encodeURIComponent(url)}&w=640&q=75`;
}
