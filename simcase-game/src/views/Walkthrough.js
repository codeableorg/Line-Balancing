/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function Walkthrough() {
  return (
    <main>
      <h2>Walkthrough</h2>
      <img
        src="assets/img/walkthrough.gif"
        alt="Walkthrough to use the app"
        css={{ display: "block", margin: "0 auto" }}
      />
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
