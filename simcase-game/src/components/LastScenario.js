/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Button } from "../components/ui";

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  height: "100%",
  marginTop: "20px",
  svg: {
    width: "90px",
    height: "90px"
  }
};

const info = {
  textAlign: "center",
  color: "#747474",
  lineHeight: "24px",
  p: {
    width: "232px",
    "&:first-child": {
      fontWeight: "bold",
      fontSize: "24px"
    }
  }
};

const action = {
  display: "flex",
  justifyContent: "space-evenly",
  width: "100%"
};

function LastScenario({ closeSubmit, handleFeedback }) {
  function actionFeedback() {
    handleFeedback();
    closeSubmit();
  }

  return (
    <div css={container}>
      <svg viewBox="0 0 304.223 304.223" css={{ transform: "rotate(45deg)" }}>
        <path
          d="M152.112,0C68.241,0,0.008,68.244,0.008,152.114c0,83.865,68.233,152.109,152.103,152.109    c83.865,0,152.103-68.244,152.103-152.109C304.215,68.244,235.977,0,152.112,0z M152.112,275.989    c-68.32,0-123.891-55.565-123.891-123.875c0-68.326,55.571-123.891,123.891-123.891s123.891,55.565,123.891,123.891    C276.003,220.424,220.426,275.989,152.112,275.989z"
          fill="#EF767A"
        />
        <path
          d="M221.922,139.186h-56.887V82.298c0-7.141-5.782-12.929-12.923-12.929    c-7.141,0-12.929,5.782-12.929,12.929v56.887H82.296c-7.141,0-12.923,5.782-12.923,12.929c0,7.141,5.782,12.923,12.923,12.923    h56.882v56.893c0,7.142,5.787,12.923,12.929,12.923c7.141,0,12.929-5.782,12.929-12.923v-56.893h56.882    c7.142,0,12.929-5.782,12.929-12.923C234.851,144.967,229.063,139.186,221.922,139.186z"
          fill="#EF767A"
        />
      </svg>
      <div css={info}>
        <p>TITLE MESSAGE</p>
        <p>
          Thestral dirigible plums, Viktor Krum hexed memory charm Animagus
          Invisibility Cloak three-headed Dog. Half-Blood Prince Invisibility
          Cloak cauldron cakes, hiya Harry! Basilisk venom Umbridge swiveling
          blue eye Levicorpus,
        </p>
      </div>
      <div css={action}>
        <Button onClick={closeSubmit}>TRY AGAIN</Button>
        <Button onClick={actionFeedback}>SUBMIT</Button>
      </div>
    </div>
  );
}

export default LastScenario;
