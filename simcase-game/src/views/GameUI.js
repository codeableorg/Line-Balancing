import React from "react";

import NavBar from "../components/NavBar";
import ScenarioForm from "../components/ScenarioForm";
import Ranking from "./Ranking";

function GameUI({ id }) {
  return (
    <>
      <NavBar />
      {id < 5 ? (
        <>
          <ScenarioForm id={+id} />
        </>
      ) : (
        <Ranking />
      )}
    </>
  );
}

export default GameUI;
