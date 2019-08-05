/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { createPortal } from "react-dom";
import { navigate } from "@reach/router";

import Confirm from "./Confirm";
import { Button } from "./ui";
import { FeedbackContext } from "../contexts/feedback";
import { DataContext } from "../contexts/data";

const button = {
  margin: "30px 0"
};

function Submit({ id, onSubmit, calculeFeedback, preFeedback }) {
  const feedbackContext = React.useContext(FeedbackContext);
  const dataContext = React.useContext(DataContext);
  const [confirm, setConfirm] = React.useState(false);

  function openSubmit() {
    calculeFeedback();
    setConfirm(true);
  }

  function closeSubmit() {
    setConfirm(false);
  }

  function actionNextStep() {
    feedbackContext.setState(false);
    if (id === 4) {
      dataContext.setRanking(true);
    }
    feedbackContext.state && navigate(`/game/${id + 1}`);
    setConfirm(false);
    onSubmit();
  }

  function moveRanking() {
    navigate(`/ranking`);
  }

  const $portal = document.getElementById("portal");
  return (
    <>
      {dataContext.ranking ? (
        <Button onClick={moveRanking} css={button}>
          RANKING
        </Button>
      ) : feedbackContext.state ? (
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
