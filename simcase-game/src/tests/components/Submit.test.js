import React from "react";
import { render } from "@testing-library/react";

import Submit from "../../components/Submit";

test("render Submit", () => {
  const { asFragment } = render(<Submit />);
  expect(asFragment()).toMatchSnapshot();
});
