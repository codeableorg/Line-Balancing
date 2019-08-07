/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import ImageContainer from "../components/ImageContainer";
import Score from "./Score";
import TaskList from "../components/TaskList";
import ProgressBar from "../components/ProgressBar";
import { FeedbackContext } from "../contexts/feedback";
import { MainContent } from "../components/helpers";
import { useAddScore } from "../action-hook";

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

function ScenarioForm({ id }) {
  const addScore = useAddScore();
  const feedbackContext = React.useContext(FeedbackContext);
  const [totalScore, setTotalScore] = React.useState(0);
  const [now, setNow] = React.useState(Date.now());

  function saveScore(score) {
    setTotalScore(totalScore + score);
    addScore(totalScore + score);
    setNow(Date.now());
  }

  return (
    <>
      <MainContent css={container}>
        <ProgressBar />
        {feedbackContext.state ? <Score id={id} /> : <ImageContainer id={id} />}
        <TaskList
          id={id}
          totalScore={totalScore}
          setTotalScore={saveScore}
          key={now}
        />
      </MainContent>
    </>
  );
}

export default ScenarioForm;
