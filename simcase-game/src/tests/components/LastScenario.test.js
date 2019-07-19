import React from "react";
import { render } from "@testing-library/react";

import LastScenario from "../../components/LastScenario";

test("LastScenario based on game stage", () => {
  const { asFragment } = render(<LastScenario />);
  expect(asFragment()).toMatchSnapshot();
});
