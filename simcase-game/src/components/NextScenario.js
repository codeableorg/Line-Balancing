/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Button } from "../components/ui";
import { FeedbackContext } from "../contexts/DataFeedback";

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
    "&:first-of-type": {
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

function NextScenario({ closeSubmit, preFeedback }) {
  const feedbackContext = React.useContext(FeedbackContext);
  const mistakesPercentage = Math.round(
    (100 * preFeedback.mistakes) / preFeedback.total
  );

  function actionFeedback() {
    feedbackContext.handleState();
    closeSubmit();
  }

  return (
    <div css={container}>
      {mistakesPercentage === 0 ? (
        <svg viewBox="0 0 95.878 95.878">
          <path
            d="M47.939,0c-26.46,0-47.88,21.446-47.88,47.939s21.42,47.939,47.88,47.939s47.88-21.446,47.88-47.939S74.399,0,47.939,0z    M47.939,87.467c-21.84,0-39.48-17.662-39.48-39.529S26.099,8.41,47.939,8.41s39.48,17.662,39.48,39.529   S69.779,87.467,47.939,87.467z"
            fill="#49BEAA"
          />
          <path
            d="M63.899,32.38l-22.26,22.287l-10.5-10.513c-1.68-1.682-4.2-1.682-5.88,0c-1.68,1.682-1.68,4.205,0,5.887l13.44,13.457   c0.84,0.841,2.1,1.262,2.94,1.262c0.84,0,2.1-0.421,2.94-1.262l25.2-25.231c1.68-1.682,1.68-4.205,0-5.887   C68.099,30.698,65.579,30.698,63.899,32.38z"
            fill="#49BEAA"
          />
        </svg>
      ) : mistakesPercentage <= 30 ? (
        <svg viewBox="0 0 55.703 55.704">
          <path
            d="M27.851,0C12.495,0,0,12.495,0,27.852s12.495,27.851,27.851,27.851c15.357,0,27.852-12.494,27.852-27.851    S43.209,0,27.851,0z M27.851,51.213c-12.882,0-23.362-10.48-23.362-23.362c0-12.882,10.481-23.362,23.362-23.362    c12.883,0,23.364,10.48,23.364,23.362C51.215,40.733,40.734,51.213,27.851,51.213z"
            fill="#EEB868"
          />
          <path
            d="M38.325,25.607H17.379c-1.239,0-2.244,1.005-2.244,2.244c0,1.239,1.005,2.245,2.244,2.245h20.946    c1.239,0,2.244-1.006,2.244-2.245C40.569,26.612,39.564,25.607,38.325,25.607z"
            fill="#EEB868"
          />
        </svg>
      ) : (
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
      )}
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

export default NextScenario;
