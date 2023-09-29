import Home from "@/pages";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("renders updated product name", async () => {
  render(<Home />);

  const productInput = screen.getByRole("textbox", { name: /Product name:/ });

  await userEvent.type(productInput, "Skirt");

  expect(screen.getByTestId("result")).toHaveTextContent("Skirt");
});

test("renders a product", async () => {
  render(<Home />);

  expect(screen.getAllByRole("listitem")).toHaveLength(1);
});

test("add a new product", async () => {
  render(<Home />);

  const productInput = screen.getByRole("textbox", { name: /Product name:/ });

  await userEvent.type(productInput, "Skirt{enter}");

  expect(screen.getAllByRole("listitem")).toHaveLength(2);
  expect(screen.getByTestId("result")).toBeEmptyDOMElement();
});
