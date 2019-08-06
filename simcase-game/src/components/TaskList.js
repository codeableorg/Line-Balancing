/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import tasksJson from "../data/tasks.json";
import Submit from "../components/Submit";
import { MarkedContext } from "../contexts/marked";
import { TasksContext } from "../contexts/tasks";
import { ResultContext } from "../contexts/result";

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

const groupButtons = {
  display: "flex",
  justifyContent: "center"
};

const secondsPerWeek = 40 * 60 * 60;

function TaskList({ id, setTotalScore, totalScore }) {
  const markedContext = React.useContext(MarkedContext);
  const tasks = Object.entries(tasksJson.scenarios[id].tasks);

  const [tasksPerStation, setTasksPerStation] = React.useState(
    tasks.reduce((tasks, [taskId, task]) => {
      return {
        ...tasks,
        [taskId]: task.default_station
      };
    }, {})
  );

  function addToStation(cant, number) {
    return event => {
      const id = event.target.value;
      // TasksPerStation da lo mismo que markedContext.user <= este ultimo marca todos
      setTasksPerStation(current => ({
        ...current,
        [id]: number
      }));
      markedContext.handleMarked(id, cant, number);
    };
  }

  // TODO: Falta contextualizar esto
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
                  css={markedContext.handleColor(id, i, task, 1)}
                  value={taskId}
                  disabled={markedContext.handleBlock(id, i, 1)}
                >
                  Station 1
                </button>
                <button
                  onClick={addToStation(a.length, 2)}
                  id={`${id}_station_2`}
                  name={`${id}_task_${taskId}`}
                  css={markedContext.handleColor(id, i, task, 2)}
                  value={taskId}
                  disabled={markedContext.handleBlock(id, i, 2)}
                >
                  Station 2
                </button>
                <button
                  onClick={addToStation(a.length, 3)}
                  css={markedContext.handleColor(id, i, task, 3)}
                  name={`${id}_task_${taskId}`}
                  id={`${id}_station_3`}
                  value={taskId}
                  disabled={markedContext.handleBlock(id, i, 3)}
                >
                  Station 3
                </button>
              </section>
            </div>
          );
        })}
      </form>
      <Submit id={+id} onSubmit={handleSubmit} />
    </>
  );
}

export default TaskList;
