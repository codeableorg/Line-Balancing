/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

import { Progress } from "./ui";
import tasksJson from "../data/tasks.json";

const title = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  h2: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#747474"
  }
};

const userScore = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  width: "90%",
  height: "62px",
  padding: "0 15px",
  borderRadius: "10px",
  boxShadow: "0px 4px 4px rgba(0,0,0,0.12)",
  color: "#fff",
  background: "#8719E0"
};

const scoreContent = {
  display: "flex",
  flexDirection: "column",
  fontWeight: "900",
  fontSize: "35px",
  lineHeight: "41px",
  textAlign: "center",
  letterSpacing: "0.0357143em",
  span: {
    "&:first-of-type": {
      fontWeight: "600",
      fontSize: "12px",
      lineHeight: "14px"
    }
  }
};

const line = {
  // TODO: Refactorize using pseudo class :before or :after
  background: "linear-gradient(#fff,#fff) no-repeat center/2px 100%",
  padding: "20px",
  height: "22px"
};

function TimesPerStation({ id }) {
  const secondsPerWeek = 40 * 60 * 60;
  const [progress, setProgress] = React.useState("0%");

  const tasks = Object.entries(tasksJson.scenarios[id].tasks);
  const [solutionPerStation, setSolutionPerStation] = React.useState(
    tasks.reduce((tasks, [taskId, task]) => {
      return {
        ...tasks,
        [taskId]: task.solution_station
      };
    }, {})
  );

  const timesPerSolution = Object.entries(solutionPerStation)
    .map(([taskId, stationNumber]) => {
      return [tasksJson.scenarios[id].tasks[taskId].time, stationNumber];
    })
    .reduce((total, [time, stationNumber]) => {
      return {
        ...total,
        [stationNumber]: total[stationNumber]
          ? total[stationNumber] + time
          : time
      };
    }, {});

  function getFullScore() {
    const maxScore = Math.max(...Object.values(timesPerSolution));
    return Math.round((1 / maxScore) * secondsPerWeek);
  }

  console.log(getFullScore());

  return (
    <>
      <section css={title}>
        <div css={userScore}>
          <div css={scoreContent}>
            <span>Station 1</span>
            <span>20</span>
          </div>
          <div css={line} />
          <div css={scoreContent}>
            <span>Ideal Score</span>
            <span>{timesPerSolution[1]}</span>
          </div>
        </div>
        <div css={userScore}>
          <div css={scoreContent}>
            <span>Station 2</span>
            <span>20</span>
          </div>
          <div css={line} />
          <div css={scoreContent}>
            <span>Ideal Score</span>
            <span>{timesPerSolution[2]}</span>
          </div>
        </div>
        <div css={userScore}>
          <div css={scoreContent}>
            <span>Station 3</span>
            <span>20</span>
          </div>
          <div css={line} />
          <div css={scoreContent}>
            <span>Ideal Score</span>
            <span>{timesPerSolution[3]}</span>
          </div>
        </div>
      </section>
      <Progress
        styles={{
          container: { width: "60%" },
          bar: { width: "40%" }
        }}
      />
      <Progress
        styles={{
          container: { width: "60%", marginTop: "10px" },
          bar: { width: progress }
        }}
      />
    </>
  );
}

export default TimesPerStation;
