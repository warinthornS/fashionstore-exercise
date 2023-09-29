import Home from "@/pages";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("renders updated product name", async () => {
  render(<Home />);

  const productInput = screen.getByRole("textbox", { name: /Product name:/ });

  await userEvent.type(productInput, "Skirt");

  expect(screen.getByTestId("result")).toHaveTextContent("Skirt");
});

test("renders 2 products", async () => {
  render(<Home />);

  expect(screen.getAllByRole("listitem")).toHaveLength(2);
});

test("add a new product", async () => {
  render(<Home />);

  const productInput = screen.getByRole("textbox", { name: /Product name:/ });

  await userEvent.type(productInput, "Skirt{enter}");

  expect(screen.getAllByRole("listitem")).toHaveLength(3);
  expect(screen.getByTestId("result")).toBeEmptyDOMElement();
});

test("remove a product", async () => {
  render(<Home />);

  const deleteButton = screen.getAllByRole("button", { name: /❌/ }).at(0);
  if (!deleteButton) throw new Error('delete button not found!')

  await userEvent.click(deleteButton);

  expect(screen.getAllByRole("listitem")).toHaveLength(1);
});
