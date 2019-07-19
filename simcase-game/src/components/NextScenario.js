/** @jsx jsx */
import { jsx } from "@emotion/core";

import { Button } from "../components/ui";

const button = {
  margin: "5px 0"
};

function NextScenario({ confirmSubmit, closeSubmit }) {
  return (
    <div>
      <p>You are going to submit your answer. Are you sure?</p>
      <Button css={button} onClick={confirmSubmit}>
        Yes, I want to submit
      </Button>
      <Button css={button} onClick={closeSubmit}>
        No, I want to continue
      </Button>
    </div>
  );
}

export default NextScenario;
