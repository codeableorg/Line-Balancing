/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { createPortal } from "react-dom";

import Confirm from "./Confirm";
import { Button } from "./ui";
import { Action } from "./helpers";

function Submit() {
  const [confirm, setConfirm] = React.useState(false);

  function openSubmit() {
    setConfirm(true);
  }
  function closeSubmit() {
    setConfirm(false);
  }

  const $portal = React.useMemo(() => document.getElementById("portal"), []);

  return (
    <div>
      <button onClick={openSubmit}>Send</button>
      {confirm &&
        createPortal(
          <Confirm
            closeSubmit={closeSubmit}
            openSubmit={openSubmit}
            confirm={confirm}
          />,
          $portal
        )}
    </div>
  );
}

export default Submit;
