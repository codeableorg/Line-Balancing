/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { createPortal } from "react-dom";

import Confirm from "./Confirm";
import { Button } from "./ui";
import { Action } from "./helpers";

function Submit({ id }) {
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
      <Button onClick={openSubmit}>Send</Button>
      {confirm &&
        createPortal(
          <Confirm
            closeSubmit={closeSubmit}
            openSubmit={openSubmit}
            confirm={confirm}
            scenario={id}
            setConfirm={setConfirm}
          />,
          $portal
        )}
    </Action>
  );
}

export default Submit;
