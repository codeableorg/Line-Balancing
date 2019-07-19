/** @jsx jsx */
import { jsx } from "@emotion/core";

import { Button } from "../components/ui";

const button = {
  margin: "5px 0"
};

function LastScenario({ confirmSubmit, closeSubmit }) {
  return (
    <div>
      <p>You are going to submit your answer. Are you sure?</p>
      <Button css={button} onClick={confirmSubmit}>
        Finish and submit
      </Button>
      <Button css={button} onClick={closeSubmit}>
        No, I want to continue
      </Button>
    </div>
  );
}

export default LastScenario;
