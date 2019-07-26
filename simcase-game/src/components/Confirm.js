import React from "react";
import { navigate } from "@reach/router";
import { Dialog } from "@reach/dialog";

import NextScenario from "./NextScenario";
import LastScenario from "./LastScenario";

function Confirm(props) {
  const {
    openSubmit,
    closeSubmit,
    confirm,
    setConfirm,
    scenario,
    onConfirm,
    feedback,
    handleFeedback
  } = props;

  function confirmSubmit() {
    feedback && navigate(`/game/${+scenario + 1}`);
    setConfirm(false);
    onConfirm();
  }

  // console.log(feedback);

  return (
    <>
      <Dialog isOpen={confirm} onDismiss={openSubmit}>
        {scenario === 4 ? (
          <LastScenario
            confirmSubmit={confirmSubmit}
            closeSubmit={closeSubmit}
            feedback={feedback}
            handleFeedback={handleFeedback}
          />
        ) : (
          <NextScenario
            confirmSubmit={confirmSubmit}
            closeSubmit={closeSubmit}
            feedback={feedback}
            handleFeedback={handleFeedback}
          />
        )}
      </Dialog>
    </>
  );
}

export default Confirm;
