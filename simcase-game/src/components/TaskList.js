/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import TaskRow from "./TaskRow";
import tasks from "../data/tasks.json";

function TaskList({ stage = 1 }) {
  return (
    <form>
      {Object.values(tasks.scenarios["0"].tasks).map(task => {
        return (
          <>
            <div>
              <h3>{task.name}</h3>
              <p>{task.time}</p>
            </div>
            <div>
              <TaskRow />
            </div>
          </>
        );
      })}
    </form>
  );
}

export default TaskList;
