/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import ImageContainer from "../components/ImageContainer";
import TaskList from "../components/TaskList";
import { MainContent } from "../components/helpers";
import { useAddScore } from "../action-hook";
import TimesPerStation from "./TimesPerStation";
import { FeedbackContext } from "../contexts/DataFeedback";

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

function ScenarioForm({ id }) {
  const [totalScore, setTotalScore] = React.useState(0);
  const addScore = useAddScore();
  const [now, setNow] = React.useState(Date.now());
  const feedbackContext = React.useContext(FeedbackContext);
  // const [feedback, setFeedback] = React.useState(false);

  function saveScore(score) {
    setTotalScore(totalScore + score);
    addScore(totalScore + score);
    setNow(Date.now());
  }

  // function handleFeedback() {
  //   setFeedback(!feedback);
  // }

  return (
    <>
      <MainContent css={container}>
        {feedbackContext.state === true ? (
          <TimesPerStation id={id} />
        ) : (
          <ImageContainer id={id} />
        )}
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
