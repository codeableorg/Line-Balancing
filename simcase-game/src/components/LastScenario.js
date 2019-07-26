/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Button } from "../components/ui";

const button = {
  margin: "5px 0"
};

function LastScenario({
  confirmSubmit,
  closeSubmit,
  feedback,
  handleFeedback
}) {
  function actionFeedback() {
    handleFeedback();
    closeSubmit();
  }

  function actionNextStep() {
    handleFeedback();
    confirmSubmit();
  }
  return (
    <>
      <p>You are going to submit your answer. Are you sure?</p>
      {feedback ? (
        <Button css={button} onClick={actionNextStep}>
          Yes, I want to submit
        </Button>
      ) : (
        <Button css={button} onClick={actionFeedback}>
          Yes, I want to feedback
        </Button>
      )}
      <Button css={button} onClick={closeSubmit}>
        No, I want to continue
      </Button>
    </>
  );
}

export default LastScenario;
