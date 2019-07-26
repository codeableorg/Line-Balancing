/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import ImageContainer from "../components/ImageContainer";
import TaskList from "../components/TaskList";
import { Statement, Table } from "../components/ui";
import { MainContent } from "../components/helpers";

function ScenarioForm({ id }) {
  const [totalScore, setTotalScore] = React.useState(0);
  const [now, setNow] = React.useState(Date.now());
  const [feedback, setFeedback] = React.useState(false);

  function saveScore(score) {
    setTotalScore(totalScore + score);
    setNow(Date.now());
  }

  function handleFeedback() {
    setFeedback(!feedback);
  }

  return (
    <>
      <MainContent>
        <Statement>
          Balance production to increase production. Use the radio buttons to
          shift tasks between adjacent workers. Good Luck!
        </Statement>
        <ImageContainer id={id} />
        <Table>
          <div>Tasks</div>
          <div>Station 1</div>
          <div>Station 2</div>
          <div>Station 3</div>
        </Table>
        <TaskList
          id={id}
          totalScore={totalScore}
          setTotalScore={saveScore}
          key={now}
          feedback={feedback}
          handleFeedback={handleFeedback}
        />
      </MainContent>
    </>
  );
}

export default ScenarioForm;
