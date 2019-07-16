import React from "react";
import { jsx } from "@emotion/core";
import { navigate } from "@reach/router";
import { Icon } from "semantic-ui-react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import NextScenario from "./NextScenario";
import LastScenario from "./LastScenario";

import { Button } from "../components/ui";

function Confirm(props) {
  const { openSubmit, closeSubmit, confirm, setConfirm, scenario } = props;

  function confirmSubmit() {
    navigate(`/game/${+scenario + 1}`);
    setConfirm(false);
  }

  return (
    <div>
      <button onClick={openSubmit}>
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
