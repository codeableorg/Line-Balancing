/** @jsx jsx */
import React from "react";
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
  let key = 0;
  return (
    <form>
      {taskList[stage].map(taskElement => {
        key += stage;
        return <TaskRow task={taskElement} key={key} />;
      })}
    </form>
  );
}

export default TaskRowList;
