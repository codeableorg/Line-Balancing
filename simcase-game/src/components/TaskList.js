/** @jsx jsx */
import { jsx } from "@emotion/core";

import tasksJson from "../data/tasks.json";
import { Table } from "../components/ui";

function TaskList({ id }) {
  const tasks = Object.values(tasksJson.scenarios[id].tasks);

  return (
    <form>
      {tasks.map((task, index) => {
        return (
          <Table key={`key_${index}`}>
            <div>
              {task.name} ({task.time})
            </div>
            <div>
              <input
                type="radio"
                name={`${id}_task_${index + 1}`}
                id={`${id}_station_1`}
              />
            </div>
            <div>
              <input
                type="radio"
                name={`${id}_task_${index + 1}`}
                id={`${id}_station_2`}
              />
            </div>
            <div>
              <input
                type="radio"
                name={`${id}_task_${index + 1}`}
                id={`${id}_station_3`}
              />
            </div>
          </Table>
        );
      })}
    </form>
  );
}

export default TaskList;
