import Home from "@/pages";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  vi.useFakeTimers({ shouldAdvanceTime: true });
});

afterEach(() => {
  vi.runOnlyPendingTimers();
  vi.useRealTimers();
});

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
  await act(() => vi.runAllTimers());

  expect(screen.getAllByRole("listitem")).toHaveLength(3);
  expect(screen.getByTestId("result")).toBeEmptyDOMElement();
  expect(screen.getByTestId("title")).toHaveTextContent("Products 3");
});

test("remove a product", async () => {
  render(<Home />);

  const deleteButton = screen.getAllByRole("button", { name: /❌/ }).at(0);
  if (!deleteButton) throw new Error("delete button not found!");

  await userEvent.click(deleteButton);
  await act(() => vi.runAllTimers());

  expect(screen.getAllByRole("listitem")).toHaveLength(1);
  expect(screen.getByTestId("title")).toHaveTextContent("Products 1");
});

test("add a new product (race condition)", async () => {
  render(<Home />);

  const productInput = screen.getByRole("textbox", { name: /Product name:/ });

  expect(screen.getAllByRole("listitem")).toHaveLength(2);
  await userEvent.type(productInput, "Skirt{enter}");
  await userEvent.type(productInput, "Shirt{enter}");
  await act(() => vi.runAllTimers());

  expect(screen.getAllByRole("listitem")).toHaveLength(4);
  expect(screen.getByTestId("result")).toBeEmptyDOMElement();
  expect(screen.getByTestId("title")).toHaveTextContent("Products 4");
});

test("remove a product (race condition)", async () => {
  render(<Home />);

  const deleteButtons = screen.getAllByRole("button", { name: /❌/ });

  expect(screen.getAllByRole("listitem")).toHaveLength(2);
  for (const deleteButton of deleteButtons) {
    await userEvent.click(deleteButton);
  }
  await act(() => vi.runAllTimers());

  expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  expect(screen.getByTestId("title")).toHaveTextContent("Products 0");
});
