/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

import Navbar from "../components/Navbar";
import { Button } from "../components/ui";
import { MainContent } from "../components/helpers";
import fire from "../firebase";

const container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  textAlign: "center",
  color: "rgba(0, 0, 0, 0.541327)",
  p: {
    fontSize: "16px",
    lineHeight: "24px",
    width: "257px",
    height: "110px"
  },
  img: {
    width: "100px"
  }
};

function Welcome() {
  return (
    <>
      <Navbar showDialogValue={true} modalValue="role" />
      <MainContent styles={container}>
        <img src="/stopwatch.png" alt="Welcome" />
        <p>
          Balance production to increase production. Use the radio buttons to
          shift tasks between adjacent workers. Good Luck!
        </p>
        <Button>
          <Link to="/game/1">START</Link>
        </Button>
      </MainContent>
    </>
  );
}

export default Welcome;
