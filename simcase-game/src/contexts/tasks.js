import React from "react";

import tasksJson from "../data/tasks.json";
import { DataContext } from "../contexts/data";

const TasksContext = React.createContext();

function TasksProvider(props) {
  const dataContext = React.useContext(DataContext);
  const [tasks, setTasks] = React.useState(null);
  const [solution, setSolution] = React.useState({});
  const [perStation, setPerStation] = React.useState({});

  React.useEffect(() => {
    if (dataContext.id !== null && dataContext.id !== 5) {
      setTasks(Object.entries(tasksJson.scenarios[dataContext.id].tasks));
    }
  }, [dataContext.id]);

  React.useEffect(() => {
    if (dataContext.id !== null) {
      setSolution(
        tasks.reduce((tasks, [taskId, task], i) => {
          return {
            ...tasks,
            [i]: task.solution_station
          };
        }, {})
      );
    }
  }, [tasks]);

  React.useEffect(() => {
    if (dataContext.id !== null) {
      setPerStation(
        tasks.reduce((tasks, [taskId, task]) => {
          return {
            ...tasks,
            [taskId]: task.default_station
          };
        }, {})
      );
    }
  }, [tasks]);

  const value = {
    tasks: tasks,
    solution: solution,
    perStation: perStation
  };

  return <TasksContext.Provider value={value} {...props} />;
}

export { TasksProvider, TasksContext };
