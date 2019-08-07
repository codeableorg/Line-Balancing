/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { ResultContext } from "../contexts/result";

const title = {
  marginTop: "0",
  fontWeight: "bold",
  fontSize: "24px",
  textAlign: "center",
  color: "#44056E"
};

const score = {
  margin: "0",
  fontWeight: "bold",
  fontSize: "96px",
  textAlign: "center",
  color: "rgba(0, 0, 0, 0.541327)"
};

const button = {
  border: "none",
  width: "96px",
  height: "36px",
  margin: "0 10px",
  borderRadius: "2px",
  background: "#fff",
  fontWeight: "600",
  fontSize: "14px",
  lineHeight: "16px",
  textAlign: "center",
  letterSpacing: "0.0357143em",
  color: "#014D40",
  transition: "all 0.25s ease-in-out"
};

const buttonRed = { ...button, background: "#EF767A", color: "#fff" };
const buttonGreen = { ...button, background: "#C6F7E2" };

function Score({ id }) {
  const resultContext = React.useContext(ResultContext);

  return (
    <>
      <h2 css={title}>Score Per Scenario</h2>
      <p css={score}>{resultContext.score[id]}</p>
      <div>
        <button
          css={
            resultContext.successTime[id][1] === resultContext.time[id][1]
              ? buttonGreen
              : buttonRed
          }
        >
          {resultContext.successTime[id][1]} /{" "}
          {resultContext.time[id][1] ? resultContext.time[id][1] : 0}
        </button>
        <button
          css={
            resultContext.successTime[id][2] === resultContext.time[id][2]
              ? buttonGreen
              : buttonRed
          }
        >
          {resultContext.successTime[id][2]} /{" "}
          {resultContext.time[id][2] ? resultContext.time[id][2] : 0}
        </button>
        <button
          css={
            resultContext.successTime[id][3] === resultContext.time[id][3]
              ? buttonGreen
              : buttonRed
          }
        >
          {resultContext.successTime[id][3]} /{" "}
          {resultContext.time[id][3] ? resultContext.time[id][3] : 0}
        </button>
      </div>
    </>
  );
}

export default Score;
