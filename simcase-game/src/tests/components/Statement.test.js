import React from "react";
import { render } from "@testing-library/react";

import Statement from "../../components/Statement";
test("Statement based on game stage", () => {
  const { asFragment } = render(<Statement />);
  expect(asFragment()).toMatchSnapshot();
});
