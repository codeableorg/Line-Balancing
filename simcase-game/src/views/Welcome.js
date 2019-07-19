/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

import Navbar from "../components/Navbar";
import { Button } from "../components/ui";
import { MainContent, Action } from "../components/helpers";

const container = {
  textAlign: "center",
  img: {
    width: "300px"
  }
};

function Welcome() {
  return (
    <>
      <Navbar />
      <MainContent styles={container}>
        <h2>Welcome</h2>
        <img src="/assets/img/wharton_logo.png" alt="Welcome" />
        <p>Welcome message for students</p>
      </MainContent>
      <Action>
        <Button>
          <Link to="/game/1">Start Game</Link>
        </Button>
      </Action>
    </>
  );
}

export default Welcome;
