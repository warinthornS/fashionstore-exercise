import { test } from "vitest";
import Home from "@/pages";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("Example Test", async () => {
  render(<Home />);
  const main = within(screen.getByRole("main"));
  const header = main.getByRole("heading", {
    level: 1,
    name: /welcome to our exercise!/i,
  });
  expect(header).toBeInTheDocument();
  const incraseButton = main.getByRole('button', {name: /increase/i})
  const counter = main.getByTestId('counter')

  expect(counter).toHaveTextContent('0')

  await userEvent.click(incraseButton);

  expect(counter).toHaveTextContent('1')
});
