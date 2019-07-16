import React from "react";
import { render } from "@testing-library/react";

import TaskRow from "../../components/TaskRow";
test("TaskRow based on game stage", () => {
  const { asFragment } = render(<TaskRow />);
  expect(asFragment()).toMatchSnapshot();
});
