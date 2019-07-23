/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

import tasksJson from "../data/tasks.json";
import { Table } from "../components/ui";

/**
 * {
 *   task0: 1,
 *   task1: 2,
 *   task2: 3
 * }
 * [["task0", 1], ["task1", 2], ["task2", 3]]
 */

function TaskList({ id }) {
  const tasks = Object.entries(tasksJson.scenarios[id].tasks);
  const [tasksPerStation, setTasksPerStation] = React.useState({});

  function addToStation(number) {
    return event => {
      const id = event.target.value;
      setTasksPerStation(current => ({
        ...current,
        [id]: number
      }));
    };
  }

  console.log(tasksPerStation);

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
    }, {}); // { 1: 10, 2: 8 }

  return (
    <form>
      {tasks.map(([taskId, task]) => {
        return (
          <Table key={`key_${taskId}`}>
            <div>
              {task.name} ({task.time})
            </div>
            <div>
              <input
                type="radio"
                name={`${id}_task_${taskId}`}
                id={`${id}_station_1`}
                onChange={addToStation(1)}
                value={taskId}
              />
            </div>
            <div>
              <input
                type="radio"
                name={`${id}_task_${taskId}`}
                id={`${id}_station_2`}
                onChange={addToStation(2)}
                value={taskId}
              />
            </div>
            <div>
              <input
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
      Station 1:
      {timesPerStation[1]}
      Statin 2:
      {timesPerStation[2]}
      Station 3:
      {timesPerStation[3]}
    </form>
  );
}

export default TaskList;
