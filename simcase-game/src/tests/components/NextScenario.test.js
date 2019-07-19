import React from "react";
import { render } from "@testing-library/react";

import NextScenario from "../../components/NextScenario";

test("render NextScenario", () => {
  const { asFragment } = render(<NextScenario />);
  expect(asFragment()).toMatchSnapshot();
});
