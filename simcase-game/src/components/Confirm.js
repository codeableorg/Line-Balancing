import React from "react";
import { navigate } from "@reach/router";
import { Dialog } from "@reach/dialog";

import NextScenario from "./NextScenario";
import LastScenario from "./LastScenario";

function Confirm(props) {
  const { openSubmit, closeSubmit, confirm, setConfirm, scenario } = props;

  function confirmSubmit() {
    navigate(`/game/${+scenario + 1}`);
    setConfirm(false);
  }

  return (
    <>
      <Dialog isOpen={confirm} onDismiss={openSubmit}>
        {scenario !== 4 ? (
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
    </>
  );
}

export default Confirm;
