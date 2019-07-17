import React from "react";
import Header from "../components/Header";
import ScenarioForm from "../components/ScenarioForm";
import Ranking from "./Ranking";

<<<<<<< HEAD
function GameUI({ id }) {
  console.log(id);
  const [scenario, setScenario] = React.useState(id);

  function addScenario(station = null) {
    setScenario(+scenario + 1);
=======
function GameUI() {
  // const [steps, setSteps] = React.useState([]);
  const [scenario, setScenario] = React.useState(0);

  function addScenario(station = null) {
    console.log(scenario);
    setScenario(scenario + 1);
    // setSteps([...steps, { id: steps.length, ...steps }]);
>>>>>>> Change scenario after submit
  }

  return (
    <div>
      <Header />
<<<<<<< HEAD
<<<<<<< HEAD
      {scenario < 4 ? (
        <>
          <h2>Scenario: {+scenario}</h2>
=======
      {scenario < 3 ? (
=======
      {scenario < 4 ? (
>>>>>>> Fix render different scenarios
        <>
          <h2>Scenario: {scenario + 1}</h2>
>>>>>>> Change scenario after submit
          <ScenarioForm addScenario={addScenario} scenario={scenario} />
        </>
      ) : (
        <Ranking />
      )}
    </div>
  );
}

export default GameUI;
