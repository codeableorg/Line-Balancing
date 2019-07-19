import React from "react";
import { render } from "@testing-library/react";

import Role from "../../views/Role";

test("render Role", () => {
  const { asFragment } = render(<Role />);
  expect(asFragment()).toMatchSnapshot();
});
