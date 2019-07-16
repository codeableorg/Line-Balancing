/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { createPortal } from "react-dom";

import Confirm from "./Confirm";
import { Button } from "./ui";

const center = {
  textAlign: "center"
};

function Submit({ scenario }) {
  const [confirm, setConfirm] = React.useState(false);

  function openSubmit() {
    setConfirm(true);
  }

  function closeSubmit() {
    setConfirm(false);
  }

  const $portal = document.getElementById("portal");

  return (
    <div css={center}>
      <Button onClick={openSubmit}>Send</Button>
      {confirm &&
        createPortal(
          <Confirm
            closeSubmit={closeSubmit}
            openSubmit={openSubmit}
            confirm={confirm}
            scenario={scenario}
            setConfirm={setConfirm}
          />,
          $portal
        )}
    </div>
  );
}

export default Submit;
