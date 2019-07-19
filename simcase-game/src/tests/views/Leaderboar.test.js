import React from "react";
import { render } from "@testing-library/react";

import Leaderboard from "../../views/Leaderboard";

test("render Leaderboard", () => {
  const { asFragment } = render(<Leaderboard />);
  expect(asFragment()).toMatchSnapshot();
});
