/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import tasksJson from "../data/tasks.json";
import Submit from "../components/Submit";
import { FeedbackContext } from "../contexts/feedback";
import { MarkedContext } from "../contexts/marked";

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
const buttonDefault = { ...button, background: "#F0F4F8", color: "#014D40" };
const buttonRed = { ...button, background: "#EF767A", color: "#fff" };
const buttonGreen = { ...button, background: "#C6F7E2" };

const groupButtons = {
  display: "flex",
  justifyContent: "center"
};

const secondsPerWeek = 40 * 60 * 60;

function TaskList({ id, setTotalScore, totalScore }) {
  const feedbackContext = React.useContext(FeedbackContext);
  const markedContext = React.useContext(MarkedContext);
  const tasks = Object.entries(tasksJson.scenarios[id].tasks);
  const tasksSolution = tasks.reduce((tasks, [taskId, task], i) => {
    return {
      ...tasks,
      [i]: task.solution_station
    };
  }, {});

  const [preFeedback, setPreFeedback] = React.useState({
    total: Object.keys(tasksSolution).length,
    mistakes: 0
  });

  const [tasksPerStation, setTasksPerStation] = React.useState(
    tasks.reduce((tasks, [taskId, task]) => {
      return {
        ...tasks,
        [taskId]: task.default_station
      };
    }, {})
  );

  const [userMarked, setUserMarked] = React.useState([]);

  function addToStation(cant, number) {
    return event => {
      const id = event.target.value;
      setTasksPerStation(current => ({
        ...current,
        [id]: number
      }));
      // ------------------
      markedContext.handleMarked(id, cant, number);
      // ------------------
      setUserMarked(current => ({
        ...current,
        [id.substr(-1)]: number
      }));
      for (let i = parseInt(id.substr(-1)) + 1; i < cant; i++) {
        setUserMarked(current => ({
          ...current,
          [i]: number
        }));
      }
      // ------------------
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
    if (feedbackContext.state) {
      if (
        Object.keys(userMarked).length === 0 &&
        task.solution_station === station
      ) {
        return buttonRed;
      } else {
        if (task.solution_station === station) {
          return buttonGreen;
        } else if (userMarked[pos] === station) {
          return buttonRed;
        } else {
          return button;
        }
      }
    } else {
      if (userMarked[pos] === station) {
        return buttonMarked;
      } else if (task.default_station === station) {
        return buttonDefault;
      } else {
        return button;
      }
    }
  }

  function calculeFeedback() {
    let count = 0;
    for (let i = 0; i < preFeedback.total; i++) {
      if (userMarked[i] !== tasksSolution[i]) {
        count++;
      }
    }
    setPreFeedback({
      ...preFeedback,
      mistakes: count
    });
  }

  function blockStation(pos, station) {
    if (feedbackContext.state) {
      return true;
    } else if (userMarked[pos] > station) {
      return true;
    } else if (userMarked[pos] === 1 && station === 3) {
      return true;
    }
  }

  return (
    <>
      <form onSubmit={handleButton} css={{ width: "100%" }}>
        {tasks.map(([taskId, task], i, a) => {
          return (
            <div key={`key_${taskId}`}>
              <div css={titleTask}>
                <p>
                  {task.name} ({task.time} seconds)
                </p>
              </div>
              <section css={groupButtons}>
                <button
                  onClick={addToStation(a.length, 1)}
                  id={`${id}_station_1`}
                  name={`${id}_task_${taskId}`}
                  css={mark(i, task, 1)}
                  value={taskId}
                  disabled={blockStation(i, 1)}
                >
                  Station 1
                </button>
                <button
                  onClick={addToStation(a.length, 2)}
                  id={`${id}_station_2`}
                  name={`${id}_task_${taskId}`}
                  css={mark(i, task, 2)}
                  value={taskId}
                  disabled={blockStation(i, 2)}
                >
                  Station 2
                </button>
                <button
                  onClick={addToStation(a.length, 3)}
                  css={mark(i, task, 3)}
                  name={`${id}_task_${taskId}`}
                  id={`${id}_station_3`}
                  value={taskId}
                  disabled={blockStation(i, 3)}
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
        calculeFeedback={calculeFeedback}
        preFeedback={preFeedback}
      />
    </>
  );
}

export default TaskList;
