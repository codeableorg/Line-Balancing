/** @jsx jsx */

import { jsx } from "@emotion/core";

function Welcome() {
  const contentStyle = {
    padding: 10,
    color: "#3d3d3d"
  };

  const titleStyle = {
    color: "#3d3d3d",
    fontSize: "1.8em"
  };

  const imageStyle = {
    width: 300,
    margin: "0 auto",
    display: "block"
  };

  const pStyle = {
    color: "#3d3d3d"
  };

  return (
    <main css={contentStyle}>
      <h2 css={titleStyle}>Welcome</h2>
      <img src="assets/img/wharton_logo.png" alt="Welcome" css={imageStyle} />
      <p css={pStyle}>Welcome message for students</p>
    </main>
  );
}

export default Welcome;
