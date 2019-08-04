/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { createPortal } from "react-dom";
import { navigate } from "@reach/router";

import Confirm from "./Confirm";
import { Button } from "./ui";
import { FeedbackContext } from "../contexts/feedback";

const button = {
  margin: "30px 0"
};

function Submit({ id, onSubmit, calculeFeedback, preFeedback }) {
  const [confirm, setConfirm] = React.useState(false);
  const feedbackContext = React.useContext(FeedbackContext);

  function openSubmit() {
    calculeFeedback();
    setConfirm(true);
  }

  function closeSubmit() {
    setConfirm(false);
  }

  function actionNextStep() {
    feedbackContext.setState(false);
    feedbackContext.state && navigate(`/game/${id + 1}`);
    setConfirm(false);
    onSubmit();
  }

  const $portal = document.getElementById("portal");
  return (
    <>
      {feedbackContext.state ? (
        <Button onClick={actionNextStep} css={button}>
          NEXT
        </Button>
      ) : (
        <Button onClick={openSubmit} css={button}>
          SEND
        </Button>
      )}
      {confirm &&
        createPortal(
          <Confirm
            closeSubmit={closeSubmit}
            openSubmit={openSubmit}
            confirm={confirm}
            setConfirm={setConfirm}
            onConfirm={onSubmit}
            preFeedback={preFeedback}
          />,
          $portal
        )}
    </>
  );
}

export default Submit;
