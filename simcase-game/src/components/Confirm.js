/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link, navigate } from "@reach/router";

import { Icon } from "semantic-ui-react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import NextScenario from "./NextScenario";
import LastScenario from "./LastScenario";

function Confirm(props) {
  const { openSubmit, closeSubmit, confirm, setConfirm, scenario } = props;

  function confirmSubmit() {
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
            {scenario === 4 ? (
              <LastScenario
                confirmSubmit={confirmSubmit}
                closeSubmit={closeSubmit}
              />
            ) : (
              <NextScenario
                confirmSubmit={confirmSubmit}
                closeSubmit={closeSubmit}
              />
            )}
          </Dialog>
        </Icon>
      </button>
    </div>
  );
}

export default Confirm;
