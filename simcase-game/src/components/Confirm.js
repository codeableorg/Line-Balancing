/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link, navigate } from "@reach/router";

import { Icon } from "semantic-ui-react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

function Confirm({ openSubmit, closeSubmit, confirm }) {
  function confirmSubmit() {
    navigate("/leaderboard");
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
            <p>¿Estás seguro? Podrías perder tus productos</p>
            <button onClick={confirmSubmit}>
              <Link to="/">Sí</Link>
            </button>
            <button onClick={closeSubmit}>No, deseo quedarme</button>
          </Dialog>
        </Icon>
      </button>
    </div>
  );
}

export default Confirm;
