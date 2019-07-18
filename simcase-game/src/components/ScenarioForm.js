import React from "react";
import Statement from "../components/Statement";
import ImageContainer from "../components/ImageContainer";
import TitlesForm from "../components/TitlesForm";
import TaskList from "../components/TaskList";
import Submit from "../components/Submit";

function ScenarioForm({ scenario }) {
  return (
    <div>
      <Statement />
      <ImageContainer />
      <TitlesForm />
      <TaskList scenario={scenario} />
      <Submit scenario={scenario} />
    </div>
  );
}

export default ScenarioForm;
