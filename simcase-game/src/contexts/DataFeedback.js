import React from "react";
import tasksJson from "../data/tasks.json";

const FeedbackContext = React.createContext();

function FeedbackProvider(props) {
  const secondsPerWeek = 40 * 60 * 60;
  const [id, setId] = React.useState(1);
  const [state, setState] = React.useState(false);
  const [result, setResult] = React.useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0
  });

  const tasks = Object.entries(tasksJson.scenarios[id].tasks);

  const initialTaskPerStation = tasks.reduce((tasks, [taskId, task]) => {
    return {
      ...tasks,
      [taskId]: task.default_station
    };
  }, {});

  const [tasksPerStation, setTasksPerStation] = React.useState(
    initialTaskPerStation
  );

  const timesPerStation = Object.entries(tasksPerStation);

  function handleState() {
    setState(!state);
    console.log(state);
  }

  React.useEffect(() => {
    Object.entries(tasksPerStation)
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
  }, [id, tasksPerStation, timesPerStation]);

  function getScore(timesPerStation) {
    console.log(timesPerStation);
    setResult({
      ...result,
      [id]: Math.round(
        (1 / Math.max(...Object.values(timesPerStation))) * secondsPerWeek
      )
    });
    console.log(result);
  }

  const value = {
    id: id,
    setId: setId,
    result: result,
    getScore: getScore,
    state: state,
    handleState: handleState,
    timesPerStation: timesPerStation,
    setTasksPerStation: setTasksPerStation
  };

  return <FeedbackContext.Provider value={value} {...props} />;
}

export { FeedbackContext, FeedbackProvider };
