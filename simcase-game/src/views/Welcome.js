/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

import Header from "../components/Header";

const container = {
  textAlign: "center"
};

const buttonStart = {
  padding: 20,
  textAlign: "center",
  background: "rgb(74,0,255)",
  color: "#fff",
  textDecoration: "none"
};

const buttonContainer = {
  marginTop: 50
};

function Welcome() {
  return (
    <main css={container}>
      <Header />
      <h2>Welcome</h2>
      <img
        src="assets/img/wharton_logo.png"
        alt="Welcome"
        css={{ width: "300px" }}
      />
      <p id="welcome">Welcome message for students</p>
      <div css={buttonContainer}>
        <Link to="/game/1" css={buttonStart}>
          Start Game
        </Link>
      </div>
    </main>
  );
}

export default Welcome;
