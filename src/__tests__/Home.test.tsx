import Home from "@/pages";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("add a new product", async () => {
  render(<Home />);

  const productInput = screen.getByRole("textbox", { name: /Product name:/ });

  await userEvent.type(productInput, "Skirt{enter}");

  expect(screen.getAllByRole("listitem")).toHaveLength(2);
});
