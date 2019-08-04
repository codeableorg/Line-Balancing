import React from "react";
import { Redirect } from "@reach/router";

import Navbar from "../components/Navbar";
import ScenarioForm from "../components/ScenarioForm";
import { DataContext } from "../contexts/data";
import { FeedbackProvider } from "../contexts/feedback";

function GameUI({ id }) {
  const dataContext = React.useContext(DataContext);
  dataContext.setId(+id);
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
