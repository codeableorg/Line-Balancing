import React from "react";
import { Redirect } from "@reach/router";

import Navbar from "../components/Navbar";
import ScenarioForm from "../components/ScenarioForm";

function GameUI({ id }) {
  if (id >= 5) {
    return <Redirect to="/ranking" noThrow />;
  }
  return (
    <>
      <Navbar showDialogValue={true} modalValue="role" />
      <ScenarioForm id={+id} />
    </>
  );
}

export default GameUI;
