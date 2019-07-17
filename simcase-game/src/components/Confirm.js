/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link, navigate } from "@reach/router";

import { Icon } from "semantic-ui-react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

function Confirm(props) {
  const {
    openSubmit,
    closeSubmit,
    confirm,
    setConfirm,
    addScenario,
    scenario
  } = props;

  function confirmSubmit() {
    addScenario();
    navigate(`/game/${+scenario + 1}`);
    setConfirm(false);
  }

  const buttoncss = {
    background: "transparent",
    backgroundRepeat: "no-repeat",
    border: "none",
    cursor: "pointer",
    overflow: "hidden",
    color: "white"
  };

  return (
    <div>
      <button css={buttoncss} onClick={openSubmit}>
        <Icon name="arrow alternate circle left outline" size="large">
          <Dialog isOpen={confirm} onDismiss={openSubmit}>
            <p>You are going to submit your answer. Are you sure?</p>
            <button onClick={confirmSubmit}>Yes, I want to submit</button>
            <button onClick={closeSubmit}>No, I want to continue</button>
          </Dialog>
        </Icon>
      </button>
    </div>
  );
}

export default Confirm;
