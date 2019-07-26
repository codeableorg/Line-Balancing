/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import tasksJson from "../data/tasks.json";
import Submit from "../components/Submit";

const titleTask = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "36px",
  margin: "10px 0",
  backgroundColor: "#F0F4F8",
  p: {
    padding: "0",
    paddingLeft: "25px",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#102A43"
  }
};

const button = {
  border: "none",
  width: "96px",
  height: "36px",
  margin: "0 10px",
  borderRadius: "2px",
  background: "#fff",

  fontWeight: "600",
  fontSize: "14px",
  lineHeight: "16px",
  textAlign: "center",
  letterSpacing: "0.0357143em",
  color: "#014D40",
  transition: "all 0.25s ease-in-out"
};

const buttonMarked = { ...button, background: "#8d62e1", color: "#fff" };
const buttonRed = { ...button, background: "#EF767A", color: "#fff" };
const buttonGreen = { ...button, background: "#C6F7E2" };

const groupButtons = {
  display: "flex",
  justifyContent: "center"
};

const secondsPerWeek = 40 * 60 * 60;

function TaskList({ id, setTotalScore, totalScore, feedback, handleFeedback }) {
  const tasks = Object.entries(tasksJson.scenarios[id].tasks);
  const [tasksPerStation, setTasksPerStation] = React.useState(
    tasks.reduce((tasks, [taskId, task]) => {
      return {
        ...tasks,
        [taskId]: task.default_station
      };
    }, {})
  );
  const [userMarked, setUserMarked] = React.useState(
    tasks.map(e => {
      return e[1].default_station;
    })
  );

  function addToStation(number) {
    return event => {
      const id = event.target.value;
      setTasksPerStation(current => ({
        ...current,
        [id]: number
      }));
      setUserMarked(current => ({
        ...current,
        [id.substr(-1)]: number
      }));
    };
  }

  const timesPerStation = Object.entries(tasksPerStation)
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
  // { 1: 10, 2: 8 } inicializo

  function getScore() {
    const maximum = Math.max(...Object.values(timesPerStation));
    return Math.round((1 / maximum) * secondsPerWeek);
  }

  function handleSubmit() {
    setTotalScore(getScore());
  }

  function handleButton(e) {
    e.preventDefault();
  }

  function mark(pos, task, station) {
    if (feedback) {
      if (task.solution_station === station) {
        return buttonGreen;
      } else if (userMarked[pos] === station) {
        return buttonRed;
      } else {
        return button;
      }
    } else {
      if (userMarked[pos] === station) {
        return buttonMarked;
      } else {
        return button;
      }
    }
  }

  return (
    <>
      <form onSubmit={handleButton} css={{ width: "100%" }}>
        {tasks.map(([taskId, task], i) => {
          return (
            <div key={`key_${taskId}`}>
              <div css={titleTask}>
                <p>
                  {task.name} ({task.time})
                </p>
              </div>
              <section css={groupButtons}>
                <button
                  onClick={addToStation(1)}
                  id={`${id}_station_1`}
                  name={`${id}_task_${taskId}`}
                  css={mark(i, task, 1)}
                  value={taskId}
                  disabled={feedback}
                >
                  Station 1
                </button>
                <button
                  onClick={addToStation(2)}
                  id={`${id}_station_2`}
                  name={`${id}_task_${taskId}`}
                  css={mark(i, task, 2)}
                  value={taskId}
                  disabled={feedback}
                >
                  Station 2
                </button>
                <button
                  onClick={addToStation(3)}
                  css={mark(i, task, 3)}
                  name={`${id}_task_${taskId}`}
                  id={`${id}_station_3`}
                  value={taskId}
                  disabled={feedback}
                >
                  Station 3
                </button>
              </section>
            </div>
          );
        })}
      </form>
      <Submit
        id={+id}
        onSubmit={handleSubmit}
        feedback={feedback}
        handleFeedback={handleFeedback}
      />
    </>
  );
}

export default TaskList;
