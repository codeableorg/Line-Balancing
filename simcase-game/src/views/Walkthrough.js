/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

function Walkthrough() {
  const buttonBack = {
    marginTop: 100,
    padding: 20,
    borderRadius: 5,
    color: "white",
    background: "blue",
    textDecoration: "none"
  };

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
      <Link to="/" css={buttonBack}>
        Go Back
      </Link>
    </main>
  );
}

export default Walkthrough;
