/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

function Leaderboard() {
  const buttonBack = {
    marginTop: 100,
    padding: 20,
    borderRadius: 5,
    color: "white",
    background: "blue",
    textDecoration: "none"
  };

  return (
    <div>
      <h1>Hello from Leaderboard after your submission</h1>
      <Link to="/" css={buttonBack}>
        Go Back
      </Link>
    </div>
  );
}

export default Leaderboard;
