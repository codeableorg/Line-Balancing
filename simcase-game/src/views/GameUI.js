import React from "react";
import { Redirect } from "@reach/router";

import Navbar from "../components/Navbar";
import ScenarioForm from "../components/ScenarioForm";
import { FeedbackProvider } from "../contexts/DataFeedback";

function GameUI({ id }) {
  if (id >= 5) {
    return <Redirect to="/ranking" noThrow />;
  }
  return (
    <FeedbackProvider>
      <Navbar showDialogValue={true} modalValue="role" />
      <ScenarioForm id={+id} />
    </FeedbackProvider>
  );
}

export default GameUI;
