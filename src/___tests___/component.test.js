import { render, screen } from "@testing-library/react";
import { HomePage } from "../pages/HomePage";

test("expect render component Homepage", () => {
  const component = render(<HomePage />);
  expect(component).toMatchSnapshot();
});
