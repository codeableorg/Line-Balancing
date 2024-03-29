/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Dialog } from "@reach/dialog";

import NextScenario from "./NextScenario";
import LastScenario from "./LastScenario";

const dialog = {
  margin: "auto",
  marginTop: "20px",
  width: "90vw",
  height: "95vh",
  padding: "0"
};

function Confirm(props) {
  const { openSubmit, closeSubmit, confirm, scenario } = props;

  return (
    <>
      <Dialog isOpen={confirm} onDismiss={openSubmit} css={dialog}>
        {scenario === 4 ? (
          <LastScenario closeSubmit={closeSubmit} scenario={scenario} />
        ) : (
          <NextScenario closeSubmit={closeSubmit} scenario={scenario} />
        )}
      </Dialog>
    </>
  );
}

export default Confirm;
