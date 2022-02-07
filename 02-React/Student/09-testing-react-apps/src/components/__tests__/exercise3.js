import React from "react";
// 💪 add `screen` to the import here:
import { render, fireEvent } from "@testing-library/react";
import Counter from "../counter";

test("counter increments and decrements when the buttons are clicked", () => {
  const { container } = render(<Counter />);
  // 💪 replace these with screen queries
  // 💰 you can use `getByText` for each of these (`getByRole` can work for the button too)
  const [decrement, increment] = container.querySelectorAll("button");
  const message = container.firstChild.querySelector("div");

  expect(message).toHaveTextContent("Current count: 0");
  fireEvent.click(increment);
  expect(message).toHaveTextContent("Current count: 1");
  fireEvent.click(decrement);
  expect(message).toHaveTextContent("Current count: 0");
});
