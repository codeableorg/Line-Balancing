/** @jsx jsx */

import { jsx } from "@emotion/core";

function Walkthrough() {
  const contentStyle = {
    padding: 10
  };
  return (
    <main css={contentStyle}>
      <h2>Walkthrough</h2>
      <img src="assets/img/walkthrough.gif" alt="Walkthrough to use the app" />
      <ul id="walkthrough">
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
