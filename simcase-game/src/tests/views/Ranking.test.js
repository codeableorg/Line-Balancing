import React from "react";
import { render } from "@testing-library/react";

import Ranking from "../../views/Ranking";

test("render Ranking", () => {
  const { asFragment } = render(<Ranking />);
  expect(asFragment()).toMatchSnapshot();
});
