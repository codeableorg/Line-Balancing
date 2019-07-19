import React from "react";
import { render } from "@testing-library/react";

import About from "../../views/About";

test("render about", () => {
  const { asFragment } = render(<About />);
  expect(asFragment()).toMatchSnapshot();
});
