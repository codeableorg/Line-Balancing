/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import TaskRow from "./TaskRow";

const taskList = {
  scenarios: {
    "1": {
      tasks: {
        task_0: {
          id: "task_0",
          name: "Greet customer",
          time: 5.0,
          solution_station: 1
        },
        task_1: {
          id: "task_1",
          name: "Steam Tortilla",
          time: 7.0,
          solution_station: 2
        },
        task_2: {
          id: "task_2",
          name: "Steam Tortilla",
          time: 7.0,
          solution_station: 3
        }
      }
    }
  }
};

function TaskRowList({ id }) {
  const tasks = Object.values(taskList["scenarios"][id]["tasks"]);
  const [marks, setMarks] = React.useState({});

  function handleChange(event) {
    setMarks({ ...marks, [event.target.name]: event.target.value });
  }

  return (
    <form>
      {tasks.map(taskElement => {
        return (
          <TaskRow
            handleChange={handleChange}
            task={taskElement}
            key={taskElement.id}
          />
        );
      })}
    </form>
  );
}

export default TaskRowList;
