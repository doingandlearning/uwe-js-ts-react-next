import React from "react";
import { render } from "@testing-library/react";
import { FavoriteNumber } from "../components/FavouriteNumber";

test('renders a number input with a label "Favorite Number"', () => {
  // ✅ Use the render method to render the <FavouriteNumber /> component.
  // ✅ Destructure the `getByLabelText` from the returned object.
  // ✅ Get the input by using the getByLabelText method, passing in a a regex like /favorite number/i
  // ✅ Expect the input toHaveAttribute of type number
});
