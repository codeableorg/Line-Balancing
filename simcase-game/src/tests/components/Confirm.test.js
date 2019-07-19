import React from "react";
import { render } from "@testing-library/react";

import Confirm from "../../components/Confirm";

test("render Confirm", () => {
  const { asFragment } = render(<Confirm />);
  expect(asFragment()).toMatchSnapshot();
});
