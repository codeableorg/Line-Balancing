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

function LastScenario({ closeSubmit, handleFeedback, preFeedback }) {
  const mistakesPercentage = Math.round(
    (100 * preFeedback.mistakes) / preFeedback.total
  );

  function actionFeedback() {
    handleFeedback();
    closeSubmit();
  }

  return (
    <div css={container}>
      {mistakesPercentage === 0 ? (
        <svg>
          <use xlinkHref="#good" />
        </svg>
      ) : mistakesPercentage <= 30 ? (
        <svg>
          <use xlinkHref="#more-or-less" />
        </svg>
      ) : (
        <svg css={{ transform: "rotate(45deg)" }}>
          <use xlinkHref="#bad" />
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

export default LastScenario;
