import React from "react";
import { Redirect } from "@reach/router";

import Navbar from "../components/Navbar";
import ScenarioForm from "../components/ScenarioForm";
import Submit from "../components/Submit";
import Header from "../components/Header";
import Ranking from "./Ranking";

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
