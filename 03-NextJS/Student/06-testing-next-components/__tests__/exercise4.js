import React from "react";
import { render } from "@testing-library/react";
import { FavoriteNumber } from "../components/FavouriteNumber";
import user from "@testing-library/user-event";

test('renders a number input with a label "Favorite Number"', () => {
  // ✅ Use the render method to render the <FavouriteNumber /> component.
  // ✅ Destructure the `getByLabelText` and `getByRole` from the returned object.
  // ✅ Get the input by using the getByLabelText method, passing in a a regex like /favorite number/i
  // ✅ Use the user.type method. The first parameter should be the input, the second should be the value ('10')
  // ✅ expect getByRole('alert') to have text content /the number is invalid/i

  const { getByLabelText, getByRole } = render(<FavoriteNumber />);
  const input = getByLabelText(/favorite number/i);
  user.type(input, "100");
  expect(getByRole("alert").textContent).toMatch(/the number is invalid/i);
});
