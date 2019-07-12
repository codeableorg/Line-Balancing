/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { createPortal } from "react-dom";
import Confirm from "./Confirm";

const buttonStyle = {
  background: "rgb(74,0,255)",
  margin: "0px 0 20px 0",
  padding: "8px 16px",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  boxShadow: "0 8px 6px -6px #555",
  width: "90%",
  height: "4vh",
  fontSize: "1.0em",
  fontFamily: "Arial"
};

const center = {
  textAlign: "center"
};

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
    <div css={center}>
      <button css={buttonStyle}>Send</button>
      {confirm &&
        createPortal(
          <Confirm
            onClose={closeSubmit}
            openModal={openSubmit}
            confirm={confirm}
          />,
          $portal
        )}
    </div>
  );
}

export default Submit;
