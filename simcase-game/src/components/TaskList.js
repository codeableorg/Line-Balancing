/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import tasksJson from "../data/tasks.json";
import { Table } from "../components/ui";
import Submit from "../components/Submit";

const marked = {
  borderRadius: "10px"
};

const markedRed = { ...marked, backgroundColor: "red" };
const markedGreen = { ...marked, backgroundColor: "green" };

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
    }) // [[10, 1], [5, 2], [3, 2]]
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

  function mark(pos, task, station) {
    if (task.solution_station === station) {
      return markedGreen;
    } else if (userMarked[pos] === station) {
      return markedRed;
    }
  }

  return (
    <>
      <form>
        {tasks.map(([taskId, task], i) => {
          return (
            <Table key={`key_${taskId}`}>
              <div>
                {task.name} ({task.time})
              </div>

              <div css={feedback ? mark(i, task, 1) : ""}>
                <input
                  defaultChecked={userMarked[i] === 1 ? "checked" : false}
                  type="radio"
                  name={`${id}_task_${taskId}`}
                  id={`${id}_station_1`}
                  onChange={addToStation(1)}
                  value={taskId}
                />
              </div>
              <div css={feedback ? mark(i, task, 2) : ""}>
                <input
                  defaultChecked={userMarked[i] === 2 ? "checked" : false}
                  type="radio"
                  name={`${id}_task_${taskId}`}
                  id={`${id}_station_2`}
                  onChange={addToStation(2)}
                  value={taskId}
                />
              </div>
              <div css={feedback ? mark(i, task, 3) : ""}>
                <input
                  defaultChecked={userMarked[i] === 3 ? "checked" : false}
                  type="radio"
                  name={`${id}_task_${taskId}`}
                  id={`${id}_station_3`}
                  onChange={addToStation(3)}
                  value={taskId}
                />
              </div>
            </Table>
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
