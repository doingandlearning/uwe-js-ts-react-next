import Counter from "../components/Counter";
import React from "react";
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";

test("counter increments and decrements when the buttons are clicked", () => {
  // ✅ Use the render method to render the <Counter /> component.
  // ✅ Destructure the container from the render method
  // ✅ Use container.querySelectorAll to get all the buttons.
  // ✅ Destructure the decrement and increment buttons from the returned array.
  // ✅ Use container.querySelector to get the message
  // ✅ Expect the message to have text content "Current count: 0"
  // ✅ Use user.click to click the increment
  // ✅ Expect the message to have text content "Current count: 1"
  // ✅ Use user.click to click the decrement
  // ✅ Expect the message to have text content "Current count: 0"
});
