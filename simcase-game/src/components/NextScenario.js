/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Button } from "../components/ui";
import { FeedbackContext } from "../contexts/feedback";
import { ResultContext } from "../contexts/result";

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  height: "100%",
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

function NextScenario({ closeSubmit }) {
  const feedbackContext = React.useContext(FeedbackContext);
  const resultContext = React.useContext(ResultContext);
  const mistakesPercentage = Math.round(
    (100 * resultContext.preFeedback.mistakes) / resultContext.preFeedback.total
  );
  function actionFeedback() {
    feedbackContext.setState(true);
    resultContext.handleMistakes(mistakesPercentage);
    closeSubmit();
  }

  return (
    <div css={container}>
      {mistakesPercentage === 0 ? (
        <>
          <svg>
            <use xlinkHref="#good" />
          </svg>
          <div css={info}>
            <p>You don't have any mistake</p>
            <p>
              Nice work! Your line looks well balanced which means your
              throughput will be high.
            </p>
          </div>
        </>
      ) : mistakesPercentage <= 30 ? (
        <>
          <svg>
            <use xlinkHref="#more-or-less" />
          </svg>
          <div css={info}>
            <p>You have less than 30% of mistakes</p>
            <p>
              You're on the right path. Revisit your line to see how it can be
              better balanced so you can get more customer through the mealtime
              rush.
            </p>
          </div>
        </>
      ) : (
        <>
          <svg css={{ transform: "rotate(45deg)" }}>
            <use xlinkHref="#bad" />
          </svg>
          <div css={info}>
            <p>You missed more than 30% of mistakes</p>
            <p>
              You missed the mark. Think about each station's idle time and
              share the love!
            </p>
          </div>
        </>
      )}
      <div css={action}>
        <Button onClick={closeSubmit}>TRY AGAIN</Button>
        <Button onClick={actionFeedback}>SUBMIT</Button>
      </div>
    </div>
  );
}

export default NextScenario;
