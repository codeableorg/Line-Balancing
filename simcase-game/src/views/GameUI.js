import React from "react";
import Header from "../components/Header";
import ScenarioForm from "../components/ScenarioForm";
import Ranking from "./Ranking";

function GameUI({ id }) {
  return (
    <div>
      <Header />
      {id < 5 ? (
        <>
          <h2>Scenario: {+id}</h2>
          <ScenarioForm scenario={+id} />
        </>
      ) : (
        <Ranking />
      )}
    </div>
  );
}

export default GameUI;
