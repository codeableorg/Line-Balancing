/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { createPortal } from "react-dom";
import { navigate } from "@reach/router";

import Confirm from "./Confirm";
import { Button } from "./ui";

const button = {
  margin: "30px 0"
};

function Submit({
  id,
  onSubmit,
  handleFeedback,
  feedback,
  calculeFeedback,
  preFeedback
}) {
  const [confirm, setConfirm] = React.useState(false);

  function openSubmit() {
    calculeFeedback();
    setConfirm(true);
  }

  function closeSubmit() {
    setConfirm(false);
  }

  function actionNextStep() {
    handleFeedback();
    feedback && navigate(`/game/${id + 1}`);
    setConfirm(false);
    onSubmit();
  }

  const $portal = document.getElementById("portal");
  return (
    <>
      {feedback ? (
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
            feedback={feedback}
            handleFeedback={handleFeedback}
            preFeedback={preFeedback}
          />,
          $portal
        )}
    </>
  );
}

export default Submit;
