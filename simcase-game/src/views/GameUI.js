import React from "react";
import Header from "../components/Header";
import ScenarioForm from "../components/ScenarioForm";
import Ranking from "./Ranking";

function GameUI() {
  // const [steps, setSteps] = React.useState([]);
  const [scenario, setScenario] = React.useState(0);

  function addScenario(station = null) {
    console.log(scenario);
    setScenario(scenario + 1);
    // setSteps([...steps, { id: steps.length, ...steps }]);
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
