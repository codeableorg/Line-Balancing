import React from "react";
import { Redirect } from "@reach/router";

import Navbar from "../components/Navbar";
import ScenarioForm from "../components/ScenarioForm";
import { DataContext } from "../contexts/data";

function GameUI({ id }) {
  const dataContext = React.useContext(DataContext);
  dataContext.setId(+id);
  if (id >= 5) {
    return <Redirect to="/ranking" noThrow />;
  }
  return (
    <>
      <Navbar />
      <ScenarioForm id={+id} />
    </>
  );
}

export default GameUI;
