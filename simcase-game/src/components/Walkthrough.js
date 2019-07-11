/** @jsx jsx */

import { jsx } from "@emotion/core";

function Walkthrough() {
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

  const listStyle = {
    color: "#3d3d3d"
  };
  return (
    <main css={contentStyle}>
      <h2 css={titleStyle}>Walkthrough</h2>
      <img
        src="assets/img/walkthrough.gif"
        alt="Walkthrough to use the app"
        css={imageStyle}
      />
      <ul css={listStyle}>
        <li>Read the problem statement</li>
        <li>Check the table</li>
        <li>Some text</li>
        <li>Some more text</li>
        <li>Finally the end og the list</li>
      </ul>
    </main>
  );
}

export default Walkthrough;
