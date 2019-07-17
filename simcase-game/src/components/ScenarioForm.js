import React from "react";
import Statement from "../components/Statement";
import ImageContainer from "../components/ImageContainer";
import TitlesForm from "../components/TitlesForm";
import TaskList from "../components/TaskList";
import Submit from "../components/Submit";

function ScenarioForm({ scenario, addScenario }) {
  return (
    <div>
      <Statement />
      <ImageContainer />
      <TitlesForm />
<<<<<<< HEAD
<<<<<<< HEAD
      <TaskList scenario={scenario} />
=======
      <TaskList />
>>>>>>> Change scenario after submit
=======
      <TaskList scenario={scenario} />
>>>>>>> Fix render different scenarios
      <Submit scenario={scenario} addScenario={addScenario} />
    </div>
  );
}

export default ScenarioForm;
