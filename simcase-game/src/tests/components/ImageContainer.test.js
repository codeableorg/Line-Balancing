import React from "react";
import { render } from "@testing-library/react";

import ImageContainer from "../../components/ImageContainer";

test("Test change image is correctly loaded", () => {
  const { asFragment } = render(<ImageContainer />);
  expect(asFragment()).toMatchSnapshot();
});
