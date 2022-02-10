import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { FavoriteNumber } from "../components/FavouriteNumber";

test('renders a number input with a label "Favorite Number"', () => {
  // ✅ Use the render method to render the <FavouriteNumber /> component.
  const { getByLabelText, getByRole } = render(<FavoriteNumber />);
  // ✅ Destructure the `getByLabelText` and `getByRole` from the returned object.
  // ✅ Get the input by using the getByLabelText method, passing in a a regex like /favorite number/i
  const input = getByLabelText(/favorite number/i);
  // ✅ Use the fireEvent.change method. The first parameter should be the input, the second should be {target: {value: '100'}}
  fireEvent.change(input, { target: { value: "100" } });
  // ✅ expect getByRole('alert') to have text content /the number is invalid/i
  expect(getByRole("alert").textContent).toMatch(/the number is invalid/i);
});
