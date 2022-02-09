import Input from "./Input";
import { render } from "@testing-library/react";

test("if name is empty, there is no paragraph", () => {
  const { queryAllByText } = render(<Input />);
  console.log(queryAllByText("The name is"));
  expect(queryAllByText("The name is").length).toBe(0);
});
