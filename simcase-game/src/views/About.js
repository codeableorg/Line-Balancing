/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

import Navbar from "../components/Navbar";
import { Button } from "../components/ui";
import { MainContent, Action } from "../components/helpers";

const container = {
  h2: {
    textAlign: "center"
  },
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  img: {
    width: "300px"
  },
  p: {
    margin: "5px"
  }
};

const button = {
  width: "50%"
};

function About() {
  return (
    <>
      <Navbar />
      <MainContent styles={container}>
        <h2>About</h2>
        <section>
          <figure>
            <img src="/assets/img/simcase_color_big.png" alt="Simcase logo" />
          </figure>
          <p css={{ textAlign: "center" }}>Developers in charge</p>
          <section>
            <p>
              <span role="img" aria-label="developer">
                🐷
              </span>{" "}
              Cesar Cachay
            </p>
            <p>
              <span role="img" aria-label="developer">
                🦍
              </span>{" "}
              Deyvi Conde
            </p>
            <p>
              <span role="img" aria-label="developer">
                🦝
              </span>{" "}
              Paulo Tijero
            </p>
            <p>
              <span role="img" aria-label="developer">
                👽
              </span>{" "}
              Carlos Ayala
            </p>
          </section>
        </section>
      </MainContent>
      <Action>
        <Button styles={button}>
          <Link to="/game/1">Play Again</Link>
        </Button>
        <Button styles={button}>
          <Link to="/">Go Home</Link>
        </Button>
      </Action>
    </>
  );
}

export default About;
