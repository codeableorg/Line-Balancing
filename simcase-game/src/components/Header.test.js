import React from "react";
import { render } from "@testing-library/react";

import Header from "./Header";

test("Header component", () => {
  const titles = [
    "Welcome",
    "Walkthrough",
    "Role",
    "Playground",
    "LeaderBoard",
    "About"
  ];

  const { asFragment } = render(<Header viewTitle={titles} />);
  expect(asFragment()).toMatchSnapshot();
});
