/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { createPortal } from "react-dom";

import Confirm from "./Confirm";
import { Button } from "./ui";
import { Action } from "./helpers";

function Submit({ id, onSubmit, handleFeedback, feedback }) {
  const [confirm, setConfirm] = React.useState(false);

  function openSubmit() {
    setConfirm(true);
  }

  function closeSubmit() {
    setConfirm(false);
  }

  const $portal = document.getElementById("portal");
  return (
    <Action>
      <Button onClick={openSubmit}>{feedback ? "Next" : "Send"}</Button>
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
    </Action>
  );
}

export default Submit;
