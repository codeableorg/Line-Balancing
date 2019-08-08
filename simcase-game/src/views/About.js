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

const section = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center"
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

const titleRole = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  color: "#44056E",
  backgroundColor: "#DAC4FF"
};

function About() {
  return (
    <>
      <div css={titleRole}>
        <h2>INFO</h2>
      </div>
      <section css={section}>
        <img
          css={{ width: "300px" }}
          src="/assets/img/simcase_color_big.png"
          alt="Simcase logo"
        />
        <p css={{ textAlign: "center" }}>
          {"<>"} with 🖤 by <a href="https://codeable.pe/">Codeable</a> Students
        </p>
      </section>
    </>
  );
}

export default About;
