/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

import Header from "../components/Header";
import { Button } from "../components/ui";

const container = {
  textAlign: "center"
};

const button = {
  width: "50%",
  padding: "20px"
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
      <p>Welcome message for students</p>
      <Button styles={button}>
        <Link to="/game">Start Game</Link>
      </Button>
    </main>
  );
}

export default Welcome;
