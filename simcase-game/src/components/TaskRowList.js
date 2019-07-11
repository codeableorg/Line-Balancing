/** @jsx jsx */
import { jsx } from "@emotion/core";
import TaskRow from "./TaskRow";

let taskList = {
  1: [
    "Brainstorm (1.0h)",
    "Storyboard (0.5h)",
    "Mockups (1.0h)",
    "Model (1.0h)",
    "Test (0.5h)",
    "Adapt (0.5h)"
  ]
};

function TaskRowList({ stage = 1 }) {
  return (
    <>
      {taskList[stage].map(taskElement => (
        <TaskRow task={taskElement} />
      ))}
    </>
  );
}

export default TaskRowList;
