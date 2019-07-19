/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { navigate } from "@reach/router";
import Header from "../components/Header";

const contentStyle = {
  padding: 0,
  margin: 0,

  color: "#4d4d4d",

  boxSizing: "border-box"
};

const buttonStart = {
  display: "block",
  width: "95%",
  height: 50,
  background: "#4F81BD",
  color: "#FFFFFF",
  fontWeight: "bold",
  margin: "0 auto",
  border: "none"
};

const buttonContainer = {
  position: "fixed",
  bottom: 0,
  width: "100%"
};

const devStyle = {
  margin: 5
};

function About() {
  return (
    <>
      <Header />
      <main css={contentStyle}>
        <div>
          <header>
            <h2 css={{ textAlign: "center" }}>About</h2>
          </header>
          <section
            css={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <figure>
              <img
                src="/assets/img/simcase_color_big.png"
                alt="Simcase logo"
                css={{ width: 300 }}
              />
            </figure>
            <p css={{ textAlign: "center" }}>Developers in charge</p>
            <section>
              <p css={devStyle}>
                <span role="img" aria-label="developer">
                  👨‍💻
                </span>{" "}
                Cesar Cachay
              </p>
              <p css={devStyle}>
                <span role="img" aria-label="developer">
                  👨‍💻
                </span>{" "}
                Deyvi Conde
              </p>
              <p css={devStyle}>
                <span role="img" aria-label="developer">
                  👨‍💻
                </span>{" "}
                Paulo Tijero
              </p>
              <p css={devStyle}>
                <span role="img" aria-label="developer">
                  👨‍💻
                </span>{" "}
                Carlos Ayala
              </p>
            </section>
          </section>
        </div>
        <footer css={buttonContainer}>
          <button
            onClick={() => {
              navigate("/game/1");
            }}
            css={buttonStart}
          >
            Start Game
          </button>
        </footer>
      </main>
    </>
  );
}

export default About;
