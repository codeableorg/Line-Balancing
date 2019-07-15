/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

function Ranking() {
  const buttonOptions = {
    padding: 20,
    textAlign: "center",
    background: "rgb(74,0,255)",
    color: "#fff",
    textDecoration: "none",
    margin: 10
  };

  return (
    <div>
      <h1>Hello from Ranking</h1>
      <Link css={buttonOptions} to="/game">
        Play Again
      </Link>
      <Link css={buttonOptions} to="/">
        Go Home
      </Link>
    </div>
  );
}

export default Ranking;
