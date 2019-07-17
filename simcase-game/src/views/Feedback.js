import React from "react";
import TaskRow from "../components/TaskRow";

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

function Feedback({ id }) {
  const tasks = Object.values(taskList["scenarios"][id]["tasks"]);

  return (
    <form>
      {tasks.map(taskElement => {
        return (
          <TaskRow task={taskElement} key={taskElement.id} feedback={true} />
        );
      })}
    </form>
  );
}

export default Feedback;
