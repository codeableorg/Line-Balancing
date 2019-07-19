import React from "react";
import { render } from "@testing-library/react";

import Walkthrough from "../../views/Walkthrough";

test("render Walkthrough", () => {
  const { asFragment } = render(<Walkthrough />);
  expect(asFragment()).toMatchSnapshot();
});
