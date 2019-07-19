import React from "react";
import { Redirect } from "@reach/router";

import Navbar from "../components/Navbar";
import ScenarioForm from "../components/ScenarioForm";
import Submit from "../components/Submit";

function GameUI({ id }) {
  if (id >= 5) {
    return <Redirect to="/ranking" noThrow />;
  }
  return (
    <>
      <Navbar />
      <ScenarioForm id={+id} />
      <Submit id={+id} />
    </>
  );
}

export default GameUI;
