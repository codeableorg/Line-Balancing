import React from "react";

function NextScenario({ confirmSubmit, closeSubmit }) {
  return (
    <div>
      <p>You are going to submit your answer. Are you sure?</p>
      <button onClick={confirmSubmit}>Yes, I want to submit</button>
      <button onClick={closeSubmit}>No, I want to continue</button>
    </div>
  );
}

export default NextScenario;
