import React from "react";
import Header from "../components/Header";
import ScenarioForm from "../components/ScenarioForm";
import Ranking from "./Ranking";

function GameUI({ id }) {
  const [scenario, setScenario] = React.useState(id);

  function addScenario(station = null) {
    setScenario(+scenario + 1);
  }

  return (
    <div>
      <Header />
      {scenario < 4 ? (
        <>
          <h2>Scenario: {scenario + 1}</h2>
          <ScenarioForm addScenario={addScenario} scenario={scenario} />
        </>
      ) : (
        <Ranking />
      )}
    </div>
  );
}

export default GameUI;
