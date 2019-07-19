import React from "react";
import { render } from "@testing-library/react";

import Welcome from "../../views/Welcome";

test("rendering Welcome", () => {
  const { asFragment } = render(<Welcome />);
  expect(asFragment()).toMatchSnapshot();
});
