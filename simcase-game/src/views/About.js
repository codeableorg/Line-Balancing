/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { MainContent } from "../components/helpers";

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

const logo = {
  fontSize: "3.2em",
  boxSizing: "content-box",
  fontWeight: "bold",
  textAlign: "center"
};

const logoCodeableAble = {
  color: "#999b9e",
  textAlign: "center"
};

function About() {
  return (
    <>
      <MainContent styles={container}>
        <h2>Developed by:</h2>
        <h1 css={logo}>
          {"{"}code<span css={logoCodeableAble}>able{"}"}</span>
        </h1>
        <section>
          <figure>
            <img src="/assets/img/simcase_color_big.png" alt="Simcase logo" />
          </figure>
          <p css={{ textAlign: "center" }}>Developers in charge</p>
          <section>
            <p>
              <span role="img" aria-label="developer">
                🐼
              </span>{" "}
              Cesar Cachay
            </p>
            <p>
              <span role="img" aria-label="developer">
                🦝
              </span>{" "}
              Paulo Tijero
            </p>
            <p>
              <span role="img" aria-label="developer">
                🐺
              </span>{" "}
              Carlos Sandoval
            </p>
            <p>
              <span role="img" aria-label="developer">
                🦍
              </span>{" "}
              Deyvi Conde
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
    </>
  );
}

export default About;
