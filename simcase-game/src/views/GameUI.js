import React from "react";
import { Redirect } from "@reach/router";

import NavBar from "../components/NavBar";
import ScenarioForm from "../components/ScenarioForm";
import Submit from "../components/Submit";

function GameUI({ id }) {
  if (id >= 5) {
    return <Redirect to="/ranking" noThrow />;
  }
  return (
    <>
      <NavBar />
      <ScenarioForm id={+id} />
      <Submit id={+id} />
    </>
  );
}

export default GameUI;
