import React from "react";
import { render } from "@testing-library/react";

import TitlesForm from "./TitlesForm";
test("TitlesForm based on game stage", () => {
  const { asFragment } = render(<TitlesForm />);
  expect(asFragment()).toMatchSnapshot();
});
