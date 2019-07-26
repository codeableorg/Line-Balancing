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

function Submit({ id, onSubmit, handleFeedback, feedback }) {
  const [confirm, setConfirm] = React.useState(false);

  function openSubmit() {
    setConfirm(true);
  }

  function closeSubmit() {
    setConfirm(false);
  }

  function actionNextStep() {
    handleFeedback();
    feedback && navigate(`/game/${+id + 1}`);
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
            scenario={id}
            setConfirm={setConfirm}
            onConfirm={onSubmit}
            feedback={feedback}
            handleFeedback={handleFeedback}
          />,
          $portal
        )}
    </>
  );
}

export default Submit;
