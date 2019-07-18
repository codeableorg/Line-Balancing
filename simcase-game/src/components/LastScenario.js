import React from "react";

function LastScenario({ confirmSubmit, closeSubmit }) {
  return (
    <div>
      <p>You are going to submit your answer. Are you sure?</p>
      <button onClick={confirmSubmit}>Finish and submit</button>
      <button onClick={closeSubmit}>No, I want to continue</button>
    </div>
  );
}

export default LastScenario;
